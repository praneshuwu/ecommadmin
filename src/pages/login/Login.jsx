import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './login.css';
import { login } from '../../store/apiCalls';
import { useNavigate } from 'react-router';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state)=>state.user?.currentUser)

  const loginHandler = async (event) => {
    event.preventDefault();
    await login(dispatch, {username, password})
    if(user){
        navigate('/',{state:user})
    }
  };
  return (
    <div className='login'>
      <div className='loginContainer'>
        <label>Username</label>
        <input
          type='text'
          placeholder='Enter Username'
          onChange={(event) => setUsername(event.target.value)}
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='Enter Password'
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className='loginButton' onClick={loginHandler}>
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
