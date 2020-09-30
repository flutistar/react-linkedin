import React from "react";
import './AnnouncementBar.scss'

export const AnnouncementBar = () => {
  return (
    <div className="announce-bar container text-center">
        <a className="d-inline-flex"> 
            <p className="announce-text-header">
                ExVeritas Certification -
            </p>
            <p className="announce-text-body"> Lower costs & obtain faster ATEX, IECEx Certificatoin. Free ATEX wall chart</p>
        </a>
    </div>
  );
};
