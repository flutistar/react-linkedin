import React, {useState} from "react";
import './Header.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit  } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisH  } from '@fortawesome/free-solid-svg-icons'

export const Header = (props) => {
  function newMsg(){
    console.log('click new')
  }
  return (
      <div className="header d-flex" >
        <span >Messaging</span>
        <div className="action-group">
          <a className="new-msg mr-3" onClick={newMsg}>
          <FontAwesomeIcon icon={ faEdit } />
          </a>
          <a className="more mr-3" onClick={newMsg}>
            <FontAwesomeIcon icon={ faEllipsisH } />
          </a>
        </div>
      </div>
  );
};