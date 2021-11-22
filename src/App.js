import React from 'react'
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './app.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
// import { useLocation, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router';

function AuthComponent() {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem('persist:root')).user
  ).currentUser?.isAdmin;
  return (
    <>
      {admin && (
        <>
          <Sidebar />
        </>
      )}
    </>
  );
}

function App() {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem('persist:root')).user
  ).currentUser?.isAdmin;
  return (
    <Router>
      <div>
        <Topbar />
        <div className='container'>
          <AuthComponent />
          <Routes>
            <Route
              exact
              path='/'
              element={admin ? <Home /> : <Navigate to='/Login' />}
            />
            <Route path='/users' element={<UserList />} />
            <Route path='/user/:userId' element={<User />} />
            <Route path='/newUser' element={<NewUser />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/newproduct' element={<NewProduct />} />
            <Route
              path='/login'
              element={!admin ? <Login /> : <Navigate to='/' />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
