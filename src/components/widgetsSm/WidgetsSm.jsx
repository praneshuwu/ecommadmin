import React from 'react'
import './widgetssm.css';
import Avatar from '../../assets/avatar.png';
import { VisibilityTwoTone } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods';


const WidgetsSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get('user/findall');

        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
    <div className='widgetSmall'>
      <span className='widgetSmallTitle'>Newly Joined Members</span>
      <ul className='widgetSmallList'>
        {users.map((user)=>(<li className='widgetSmallListItem' key={user._id}>
          <img src={user.img || Avatar} alt='' className='widgetSmallImg' />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUserName'>{user.username}</span>
          </div>
          <button className='widgetSmallButton'>
            <VisibilityTwoTone className='widgetSmallIcon' />
            View
          </button>
        </li>))}
        
      </ul>
    </div>
  );
};

export default WidgetsSm;
