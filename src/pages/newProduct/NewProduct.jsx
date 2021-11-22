// import Chart from '../../components/chart/Chart';
// import { Link } from 'react-router-dom';
// import { productData } from '../../dummyData';
// import { PublishTwoTone } from '@material-ui/icons';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';
import React from 'react';
import { useState } from 'react';
import './newproduct.css';
import { createProduct } from '../../store/apiCalls';
import { useDispatch } from 'react-redux';

const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [progressBar, setProgressBar] = useState(null);
  const [color, setColor] = useState([]);
  const [progressBarError, setProgressBarError] = useState(null);
  const dispatch = useDispatch();

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
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgressBar(progress.toFixed(1));
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
          createProduct(product, dispatch);
        });
      }
    );
  };

  return (
    <div className='newproduct'>
      <form action='' className='newProductForm'>
        <label className='formLabel'>Image</label>
        <input
          type='file'
          name='img'
          id='img'
          style={{ border: 'none' }}
          onChange={(event) => setFile(event.target?.files[0])}
        />
        <span className='formLabel'>
          {progressBarError
            ? progressBarError
            : progressBar && `Uploading: ${progressBar}% completed`}
        </span>
        <label className='formLabel'>Title</label>
        <input
          type='text'
          name='title'
          placeholder='Enter Product Name'
          onChange={inputChangeHandler}
        />
        <label className='formLabel'>Description</label>
        <input
          type='text'
          name='description'
          placeholder='Enter Product Description'
          onChange={inputChangeHandler}
        />
        <label className='formLabel'>Price</label>
        <input
          type='number'
          name='price'
          placeholder='Enter Product Price'
          onChange={inputChangeHandler}
        />
        <label className='formLabel'>Categories</label>
        <input
          type='text'
          name='color'
          placeholder='Enter Product Color (Separate by using commas)'
          onChange={colorChangeHandler}
        />
        <label className='formLabel'>Categories</label>
        <input
          type='text'
          name='categories'
          placeholder='Enter Product Categories (Separate by using commas)'
          onChange={categoryChangeHandler}
        />
        <label className='formLabel'>In Stock: </label>
        <select
          name='inStock'
          id='inStock'
          className='newProductSelect'
          onChange={inputChangeHandler}
        >
          <option value='select'>Select</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>

        <button className='productAddButton' onClick={createButtonHandler}>
          CREATE PRODUCT
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
