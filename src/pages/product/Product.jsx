import { Link } from 'react-router-dom';
import './product.css';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import { PublishTwoTone } from '@material-ui/icons';

const Product = () => {
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
              src='https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1624030834_6031228.jpg?w=480&dpr=1.3'
              alt='T-Shirt'
              className='productInfoImg'
            />
            <span className='productName'>Superman T-shirt</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>123</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>sales:</span>
              <span className='productInfoValue'>$1230</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>active:</span>
              <span className='productInfoValue'>yes</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>in stock:</span>
              <span className='productInfoValue'>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>Product Name</label>
            <input type='text' placeholder='Enter Product Name' />
            <label>In Stock</label>
            <select name='inStock' id='inStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <label>Active</label>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
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
