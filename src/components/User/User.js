import React, { useState } from 'react';
import './User.css';
import fakeData from '../../fakeData';
import './User.css';
import Profile from '../Profile/Profile';
import Cart from '../Cart/Cart';



const User = () => {
    const first15 = fakeData.slice(0,15);        
    const [profile, setProfile] = useState(first15);
    const [cart, setCart] = useState([]);
    const handleAddProfile = (profile) => {
           
        const newCart = [...cart, profile];  
        setCart(newCart); 
    }

    return (
        <div className="user-container">
            <div className="profile">
                    {
                        profile.map(pr => <Profile
                            handleAddProfile = {handleAddProfile}
                            profile = {pr} ></Profile>)
                    }
            </div>
            <div className="cart">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default User;