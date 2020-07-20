import React from "react";

import './UserInfo.scss'


export function UserInfo (props) {
 const { user } = props;
 const { name, avatar } = user;

    return <div className="user-info-box">

       <img className='user-info-box-avatar' src={avatar} alt='avatar'/>
       <div className='user-info-box-text'>Welcome</div>
       <div className='user-info-box-text'>{name}</div>

    </div>
}