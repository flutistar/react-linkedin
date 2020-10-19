import React, {useState} from "react";
import './MessagingOverlay.scss'

import { DropdownButton, Dropdown } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit  } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisH  } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown  } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp  } from '@fortawesome/free-solid-svg-icons'

export const MessagingOverlay = (props) => {
  const [msgBoxStatus, setMsgBoxStatus] = useState(1);
  function clickMsgHeader(){
    setMsgBoxStatus(!msgBoxStatus)
  }
  const Collapse = () => {
    if(msgBoxStatus){
      return (
        <FontAwesomeIcon icon={ faChevronDown } />
      );
    }
    return (
        <FontAwesomeIcon icon={ faChevronUp } />
    );
  }
  function newMsg(){
    console.log('click new')
  }
  return (
    <div className={`messaging-overlay ${msgBoxStatus ? 'expanded' : 'collapsed'}`}>
      <div className="header d-flex" >
        <div className="avatar" onClick={clickMsgHeader}>
          <img src={props.avatar}></img>
          <div className="status"></div>
        </div>
        <span onClick={clickMsgHeader}>Messaging</span>
        <div className="action-group">
          <a className="new-msg" onClick={newMsg}>
          <FontAwesomeIcon icon={ faEdit } />
          </a>
          <a className="more" onClick={newMsg}>
            <FontAwesomeIcon icon={ faEllipsisH } />
          </a>
          <a className="toggling" onClick={clickMsgHeader}>
            <Collapse />
          </a>
        </div>
      </div>
      <div className="body">
      </div>
    </div>
  );
};