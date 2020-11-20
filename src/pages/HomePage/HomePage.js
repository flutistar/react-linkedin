import React, { useReducer } from "react";
// import { LeftSidebar } from "../../components/LeftSidebar";
// import { Activity } from "../../components/Activity";
import { useHistory } from "react-router-dom";

import { LeftCol } from '../../components/Home/Left/LeftCol'
import { Feed } from '../../components/Home/Main/Feed'
import "./HomePage.scss";

export const HomePage = () => {
  const history = useHistory()
  function handleClick() {
    history.push("/notifications");
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <LeftCol />
        </div>
        <div className="col-md-8">
          <Feed />
        </div>
      </div>
    </div>
  );
};
