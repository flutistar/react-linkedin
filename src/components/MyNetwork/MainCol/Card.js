import React from "react";

import './Card.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes  } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {
  return (
    <li className="card">
        <button className="dismiss">
          <FontAwesomeIcon icon={ faTimes } />
        </button>
        <img className='bg-img' src={props.bgimg}></img>
        <a className="person">
          <img className='avatar' width="72" height="72" src={props.img}></img>
          <div className="detail">
            <div className="name">{props.fullname}</div>
            <div className="title">{props.title}</div>
            
          </div>
        </a>
        <div className="bottom-container">
          <div className="mutual">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                <path d="M11 3c-1.1 0-2.1.4-3 1-2.2-1.7-5.3-1.2-7 1s-1.2 5.3 1 7c.9.6 1.9 1 3 1s2.1-.4 3-1c2.2 1.7 5.3 1.2 7-1s1.2-5.3-1-7c-.9-.6-1.9-1-3-1zM1.9 8c0-1.7 1.4-3.1 3.1-3.1.6 0 1.2.2 1.7.5-1 1.6-1 3.6 0 5.2-1.4 1-3.4.6-4.3-.8-.3-.6-.5-1.2-.5-1.8zm9.1 3.1c-.6 0-1.2-.2-1.7-.5 1-1.6 1-3.6 0-5.2 1.4-1 3.4-.6 4.3.9s.6 3.4-.9 4.3c-.5.3-1.1.5-1.7.5z"></path>
              </svg>
              <a>
                {props.mutual} mutual connections
              </a>      
          </div>
          <div className="actions">
            <a className="connect">Connect</a>
          </div>
        </div>
    </li>
  );
};
