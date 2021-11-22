
import './user.css';
import Avatar from '../../assets/avatar.png';
import {
  CalendarTodayTwoTone,
  LocalPhoneTwoTone,
  LocationOnTwoTone,
  MailOutlineTwoTone,
  PermIdentityTwoTone,
  Publish,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import React from 'react'

const User = () => {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to='/newUser'>
          <button className='userAddButton'>CREATE USER</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className='userDisplay'>
          <div className='userDisplayTop'>
            <img src={Avatar} alt='Avatar' className='userDisplayTopImg' />
            <div className='userDisplayTopTitle'>
              <span className='userDisplayUsername'>Anna Akana</span>
              <span className='userDisplayUserDesignation'>
                Software Designer
              </span>
            </div>
          </div>
          <div className='userDisplayBottom'>
            <span className='userDisplayBottomTitle'>Account Details</span>
            <div className='userDisplayInfoContainer'>
              <PermIdentityTwoTone className='userDisplayIcon' />
              <span className='userDisplayInfoTitle'>annaakana69</span>
            </div>
            <div className='userDisplayInfoContainer'>
              <CalendarTodayTwoTone className='userDisplayIcon' />
              <span className='userDisplayInfoTitle'>15-11-1997</span>
            </div>
            <span className='userDisplayBottomTitle'>Contact Details</span>
            <div className='userDisplayInfoContainer'>
              <LocalPhoneTwoTone className='userDisplayIcon' />
              <span className='userDisplayInfoTitle'>+91-9876543210</span>
            </div>
            <div className='userDisplayInfoContainer'>
              <MailOutlineTwoTone className='userDisplayIcon' />
              <span className='userDisplayInfoTitle'>anna@akana.com</span>
            </div>
            <div className='userDisplayInfoContainer'>
              <LocationOnTwoTone className='userDisplayIcon' />
              <span className='userDisplayInfoTitle'>Basic Address, India</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>EDIT</span>
          <form action='' className='userUpdateForm'>
            <div className='userUpdateFormLeft'>
              <div className='userUpdateItem'>
                <label htmlFor=''>Username</label>
                <input
                  type='text'
                  placeholder='annaakana69'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label htmlFor=''>Full Name</label>
                <input
                  type='text'
                  placeholder='Anna Akana'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label htmlFor=''>Email</label>
                <input
                  type='text'
                  placeholder='anna@akana.com'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label htmlFor=''>Address</label>
                <input
                  type='text'
                  placeholder='Basic Address, India'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label htmlFor=''>Phone</label>
                <input
                  type='text'
                  placeholder='+91-9876543210'
                  className='userUpdateInput'
                />
              </div>
            </div>
            <div className='userUpdateFormRight'>
              <div className='userUpdateUpload'>
                <img src={Avatar} alt='' className='userUpdateImg' />
                <label htmlFor='file'>
                  <Publish className='userImgFileLabelIcon' />
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </div>
              <button className='userUpdateSubmitButton'>UPDATE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
