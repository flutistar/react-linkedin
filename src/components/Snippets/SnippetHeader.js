import React from "react";
import './SnippetHeader.scss'

export const SnippetHeader = (props) => {
  return (
        <div className="header d-flex">
          <span>{props.headerLabel}</span>
        </div>
  );
};