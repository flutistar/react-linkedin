import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import { Invitation, Discover } from '../../components/MyNetwork/MainCol'

import "./MessagingPage.scss";
import { MsgContainer } from "../../components/Messaging";
import adImg from "../../assets/images/advertise1.PNG"

export const MessagingPage = () => {
  const history = useHistory()
  return (
    <div className="container msg-page">
      <div className="row">
        <div className="col-md-8">
          <MsgContainer />
        </div>
        <div className="col-md-3">
          <img className="right-ad-img" src={adImg} />
        </div>
      </div>
    </div>
  );
};
