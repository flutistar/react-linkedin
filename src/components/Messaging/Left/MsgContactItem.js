import React, { useState } from "react";

import './MsgContactItem.scss'

export const MsgContactItem = (props) => {
  return (
    <div className={`msg-contact-item  d-inline-flex ${props.counter===props.activeItem?'active':''}`} 
      onClick={() => props.clicked(props.counter)}>
        <a>
          <img className='avatar' width="72" height="72" src={props.img}></img>
        </a>
        <div className="detail">
          <div className="title d-flex">
            <p className="name">{props.fullname}</p>
            <p className="last-time ml-auto">{props.last_time}</p>
          </div>
          <div className="message">{props.message}</div>
        </div>
    </div>
  );
};
