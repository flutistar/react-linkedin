import React, {useState} from "react";
import './MsgMainbox.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit  } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisH  } from '@fortawesome/free-solid-svg-icons'


export const MsgMainbox = (props) => {
  const [newMsg, setNewMsg] = useState("")
  const submitMsg = () => {
    props.submitted({
      text: newMsg,
      index: props.activeIndex
    })
    setNewMsg("")
  }

  const Msgs = () => {
    return (
      props.msg.map((item, index) => {
        if(item.user === "other"){
          return (
            <div key={index}>
              <div>
                <img className="user-img" src={props.otherImg} />
                <span className="user-name">{props.otherName}</span>
              </div>
                <div className="msg-content" key={index}>{item.text}</div>
            </div>
          )
        }else{
          return (
            <div key={index}>
                <div>
                  <img className="user-img" src={props.avatar} />
                  <span className="user-name">Alexander Rezzik</span>
                </div>
                <div className="msg-content" key={index}>{item.text}</div>
            </div>
          )
        }
      })
    )
  }
  return (
      <div className="msg-main-box ">
        <div className="header" >
          <div >Joel Smith</div>
          <small>Full STack DEveloepr</small>
        </div>
        <div className="body">
          <Msgs />
        </div>
        <div className="footer">
          <textarea
            value={newMsg}
            onChange={e => setNewMsg(e.target.value)}
            >
          </textarea>
          <div className="actions">
            <button className="submit" onClick={submitMsg}>Send</button>
          </div>
        </div>
      </div>
  );
};