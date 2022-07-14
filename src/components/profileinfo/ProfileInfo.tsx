import React from "react";
import userImg from '../../images/image-jeremy.png';
import './ProfileInfo.css'

const ProfileInfo = ()=>{
    return(
        <div className="profileInfo">
            <img src={userImg} alt="Jeremy Robson"/>
            <div className="infoContainer">
                <h4>Report for</h4>
                <h1>Jeremy Robson</h1>
            </div>
        </div>
    );
}

export default ProfileInfo;