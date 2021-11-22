import React from 'react'
import './newuser.css';

const NewUser = () => {
  return (
    <div className='newuser'>
      <h3 className='newUserTitle'>Create New User</h3>
      <form className='newUserForm'>
        <div className='newUserFormItem'>
          <label>Username</label>
          <input type='text' placeholder='Enter Username' />
        </div>
        <div className='newUserFormItem'>
          <label>Full Name</label>
          <input type='text' placeholder='Enter Full Name' />
        </div>
        <div className='newUserFormItem'>
          <label>Email</label>
          <input type='email' placeholder='Enter Email' />
        </div>
        <div className='newUserFormItem'>
          <label>Password</label>
          <input type='password' placeholder='Enter Password' />
        </div>
        <div className='newUserFormItem'>
          <label>Phone</label>
          <input type='text' placeholder='Enter Phone Number' />
        </div>
        <div className='newUserFormItem'>
          <label>Address</label>
          <input type='text' placeholder='Enter Address' />
        </div>
        <div className='newUserFormItem'>
          <label>Gender</label>
          <div className='newUserGender'>
            <input type='radio' name='gender' id='male' value='male' />
            <label htmlFor='male'>Male</label>
            <input type='radio' name='gender' id='female' value='female' />
            <label htmlFor='female'>Female</label>
            <input type='radio' name='gender' id='other' value='other' />
            <label htmlFor='other'>Other</label>
          </div>
        </div>
        <div className='newUserFormItem'>
          <label htmlFor=''>Active</label>
          <select name='Active' id='active' className='newUserSelect'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className="newUserSubmitButton">CREATE USER</button>
      </form>
    </div>
  );
};

export default NewUser;
