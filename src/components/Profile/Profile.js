import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import './Profile.css';


const Profile = (props) => {
    
    const {img, name, username,email, salary} = props.profile;
        return (
            <div className="profile">
                <div className="pr2">

                    <div>
                    <img src={img} alt=""/>
                    </div>

                    <div className="profile-name">
                    <h2 >{name }</h2>
                    <p><small><b>{username}</b></small></p>
                    <p>{email}</p>
                    <h4>Salary: $ {salary}</h4>

                    <button 
                        onClick={ () => props.handleAddProfile(props.profile)}
                        className="button">
                            <FontAwesomeIcon icon={faPlusSquare} /> HIRE</button>
                    </div>
                </div>
            </div>
    );
};

export default Profile;