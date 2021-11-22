import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlineTwoTone } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './productlist.css';
import { deleteProduct, getProducts } from '../../store/apiCalls';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const deleteHandler = (id) => {
    deleteProduct(id, dispatch)
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'product',
      headerName: 'Product',
      width: 250,
      renderCell: (params) => {
        return (
          <div className='productListItem'>
            <img src={params.row.img} alt='Avatar' className='productListImg' />
            {params.row.title}
          </div>
        );
      },
    },
    { field: 'inStock', headerName: 'Stock', width: 150 },
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
            <Link to={'/product/' + params.row._id}>
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteOutlineTwoTone
              className='productListDelete'
              onClick={() => {
                deleteHandler(params.row._id);
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
        rows={products}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
