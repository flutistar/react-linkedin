import React, { useReducer } from "react";
// import { LeftSidebar } from "../../components/LeftSidebar";
// import { Activity } from "../../components/Activity";
import { useHistory } from "react-router-dom";

import "./JobsPage.scss";

export const JobsPage = () => {
  const history = useHistory()
  function handleClick() {
    history.push("/notifications");
  }
  return (
    <div className="container">
      JobsPage
      <button type="button" onClick={handleClick}>
      JobsPage
      </button>
    </div>
  );
};
