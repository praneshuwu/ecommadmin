import { Link } from 'react-router-dom';
import './product.css';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import { PublishTwoTone } from '@material-ui/icons';
import { useLocation } from 'react-router';
import {useSelector} from 'react-redux';

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  const product = useSelector((state)=> state.product?.products.find((product)=> product._id === productId))

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
            data={productData}
            dataKey='Sales'
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
              <span className='productInfoKey'>sales:</span>
              <span className='productInfoValue'>${product.price}</span>
            </div>
            
            <div className='productInfoItem'>
              <span className='productInfoKey'>in stock:</span>
              <span className='productInfoValue'>{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <h3 style={{marginBottom: '1rem'}}>Update details</h3>
            <label>Product Name</label>
            <input type='text' placeholder='Enter New Product Name' />
            <label>Product Description</label>
            <input type='text' placeholder='Enter New Product Description' />
            <label>Product Price</label>
            <input type='text' placeholder='Enter New Product Price' />
            <label>In Stock</label>
            <select name='inStock' id='inStock'>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img
                src='https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1624030834_6031228.jpg?w=480&dpr=1.3'
                alt='Product Upload'
                className='productUploadImg'
              />
              <label htmlFor='file'>
                <PublishTwoTone className='productImgUploadIcon' />
              </label>
              <input
                type='file'
                name='file'
                id='file'
                style={{ display: 'none' }}
              />
            </div>
            <button className='productUpdateButton'>UPDATE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
