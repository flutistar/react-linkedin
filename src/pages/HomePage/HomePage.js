import React, { useReducer } from "react";
// import { LeftSidebar } from "../../components/LeftSidebar";
// import { Activity } from "../../components/Activity";
import { useHistory } from "react-router-dom";

import "./HomePage.scss";

export const HomePage = () => {
  const history = useHistory()
  function handleClick() {
    history.push("/notifications");
  }
  return (
    <div className="container">
      HomePage
      <button type="button" onClick={handleClick}>
        Notification
      </button>
    </div>
  );
};
