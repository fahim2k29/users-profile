import React from 'react';
import logo from '../../images/logo.PNG';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="home">Home</a>
                <a href="profile">Profile</a>
                <a href="message">Message</a>
                <a href="friend">Friend</a>
                <a href="notifications">Notifications</a>
            </nav>
        </div>
    );
};

export default Header;