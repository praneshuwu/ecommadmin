import {
  AssessmentTwoTone,
  AttachMoneyTwoTone,
  DynamicFeedTwoTone,
  LineStyleRounded,
  MailTwoTone,
  MessageTwoTone,
  PersonTwoTone,
  StorefrontTwoTone,
  TimelineRounded,
  TrendingUpRounded,
  WorkTwoTone,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import React from 'react'
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <LineStyleRounded className='sidebarIcon' />
              <Link to='/' className='link'>Home</Link>
            </li>
            <li className='sidebarListItem'>
              <TimelineRounded className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUpRounded className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <PersonTwoTone className='sidebarIcon' />
              <Link to='/users' className='link'>Users</Link>
            </li>
            <li className='sidebarListItem'>
              <StorefrontTwoTone className='sidebarIcon' />
              <Link to='/products' className='link'>Products</Link>
            </li>
            <li className='sidebarListItem'>
              <AttachMoneyTwoTone className='sidebarIcon' />
              Transactions
            </li>
            <li className='sidebarListItem'>
              <AssessmentTwoTone className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <MailTwoTone className='sidebarIcon' />
              Mail
            </li>
            <li className='sidebarListItem'>
              <DynamicFeedTwoTone className='sidebarIcon' />
              Feedback
            </li>
            <li className='sidebarListItem'>
              <MessageTwoTone className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <WorkTwoTone className='sidebarIcon' />
              Manage
            </li>
            <li className='sidebarListItem'>
              <TimelineRounded className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUpRounded className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
