import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';
import Chart from '../../components/chart/Chart';
import { PublishTwoTone } from '@material-ui/icons';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { userRequest } from '../../requestMethods';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';
import { updateProduct } from '../../store/apiCalls';
import { useDispatch } from 'react-redux';

const Product = () => {
  const [productStats, setProductStats] = useState([]);
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [progressBar, setProgressBar] = useState(null);
  const [progressBarError, setProgressBarError] = useState(null);
  const [color, setColor] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  const product = useSelector((state) =>
    state.product?.products.find((product) => product._id === productId)
  );

  const inputChangeHandler = (event) => {
    setInputs((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };
  const categoryChangeHandler = (event) => {
    setCategories(event.target.value.split(','));
  };
  const colorChangeHandler = (event) => {
    setColor(event.target.value.split(','));
  };

  const createButtonHandler = (event) => {
    event.preventDefault();
    //TODO: UPLOAD FILE AND FIRE APICALL
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgressBar(progress);
      },
      (error) => {
        setProgressBarError(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...inputs,
            img: downloadURL,
            categories: categories,
            color: color,
          };
          updateProduct(productId, product, dispatch);
        });
      }
    );
  };

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get(
          '/orders/income/?productId=' + productId
        );
        const list = res.data.sort((a, b) => a._id - b._id);
        list.map((item) =>
          setProductStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS, productId]);

  const newImage = new Image();
  newImage.src = file;

  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newProduct'>
          <button className='productAddButton'>CREATE PRODUCT</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopLeft'>
          <Chart
            data={productStats}
            dataKey='sales'
            title='Sales Performance'
            legend
          />
        </div>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img
              src={product.img}
              alt={product.title}
              className='productInfoImg'
            />
            <span className='productName'>{product.title}</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>{product._id}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>price:</span>
              <span className='productInfoValue'>${product.price}</span>
            </div>

            <div className='productInfoItem'>
              <span className='productInfoKey'>in stock:</span>
              <span className='productInfoValue'>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <h3 style={{ marginBottom: '1rem' }}>Update details</h3>
            <label>Updated Product Name</label>
            <input
              type='text'
              placeholder='Enter New Product Name'
              onChange={inputChangeHandler}
            />
            <label>Updated Product Description</label>
            <input
              type='text'
              placeholder='Enter New Product Description'
              onChange={inputChangeHandler}
            />
            <label>Updated Product Categories</label>
            <input
              type='text'
              placeholder='Enter Updated Product Categories (Separated with commas)'
              onChange={categoryChangeHandler}
            />
            <label>Updated Product Colors</label>
            <input
              type='text'
              placeholder='Enter Updated Product Colors (Separated with commas)'
              onChange={colorChangeHandler}
            />
            <label>Updated Product Price</label>
            <input
              type='text'
              placeholder='Enter New Product Price'
              onChange={inputChangeHandler}
            />
            <label>In Stock</label>
            <select name='inStock' id='inStock' onChange={inputChangeHandler}>
              <option value='select'>Select</option>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img
                src={file ? newImage : product.img}
                alt='Product Upload'
                className='productUploadImg'
              />
              {console.log(file)}
              <label htmlFor='img' name='img'>
                <PublishTwoTone className='productImgUploadIcon' />
              </label>
              
              <input
                type='file'
                name='img'
                id='img'
                style={{ display: 'none' }}
                onChange={(event) => setFile(event.target?.files[0])}
              />
              <span className='formLabel'>
              {progressBarError
            ? progressBarError
            : progressBar && `Uploading: ${progressBar}% completed`}
              </span>
            </div>
            <button className='productUpdateButton' onClick={createButtonHandler}>UPDATE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
