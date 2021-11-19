// import Chart from '../../components/chart/Chart';
// import { Link } from 'react-router-dom';
// import { productData } from '../../dummyData';
// import { PublishTwoTone } from '@material-ui/icons';
import './newproduct.css';

const NewProduct = () => {
  return <div className='newproduct'>

      <form action="" className="newProductForm">
      <label className='formLabel'>Image</label>
      <input type="file" name="image" id="image" style={{border:'none'}}/>
      <label className='formLabel'>Name</label>
      <input type="text" placeholder='Enter Product Name'/>
      <label className='formLabel'>Stock</label>
      <input type="text" placeholder='Enter Stock Available'/>
      <label className='formLabel'>Active</label>
      <select name="active" id="newProductSelect" className="newProductSelect">
          <option value="yes">Yes</option>
          <option value="no">No</option>
      </select>

        <button className="productAddButton">CREATE PRODUCT</button>
      </form>
      

  </div>;
};

export default NewProduct;
