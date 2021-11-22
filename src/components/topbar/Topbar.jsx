import { LanguageTwoTone, NotificationsNoneTwoTone, SettingsTwoTone} from '@material-ui/icons'
import './topbar.css'
import Avatar from '../../assets/avatar.png'
import { useSelector } from 'react-redux';
import React from 'react';


const Topbar = () => {

    const user = useSelector((state) => state?.currentUser);

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className='logo'>primeadmin</span>
                </div>
                { user && <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneTwoTone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageTwoTone/>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsTwoTone/>
                    </div>
                    <img src={Avatar} alt="Avatar" className="topAvatar"/>
                </div>}
            </div>
        </div>
    )
}

export default Topbar
