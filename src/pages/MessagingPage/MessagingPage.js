import React, { useReducer } from "react";
// import { LeftSidebar } from "../../components/LeftSidebar";
// import { Activity } from "../../components/Activity";
import { useHistory } from "react-router-dom";

import "./MessagingPage.scss";

export const MessagingPage = () => {
  const history = useHistory()
  function handleClick() {
    history.push("/notifications");
  }
  return (
    <div className="container">
      MessagingPage
      <button type="button" onClick={handleClick}>
        Notification
      </button>
    </div>
  );
};
