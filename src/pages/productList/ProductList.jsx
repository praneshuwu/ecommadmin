import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlineTwoTone } from '@material-ui/icons';

import {productRows} from '../../dummyData'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './productlist.css';

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const deleteHandler = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 210,
      renderCell: (params) => {
        return (
          <div className='productListItem'>
            <img src={params.row.img} alt='Avatar' className='productListImg' />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 210 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteOutlineTwoTone
              className='productListDelete'
              onClick={() => {
                deleteHandler(params.row.id);
              }}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className='productlist'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
