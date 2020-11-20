import React, {useState} from "react";
import './Search.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch  } from '@fortawesome/free-solid-svg-icons'
import { faSlidersH  } from '@fortawesome/free-solid-svg-icons'

export const Search = (props) => {
  function newMsg(){
    console.log('click new')
  }
  return (
      <div className="search d-flex" >
        <FontAwesomeIcon className="search-icon" icon={faSearch } />
        <div className="search-box">
          <input type="text" placeholder="Search messages"></input>
        </div>
        <a className="filter" onClick={newMsg}>
            <FontAwesomeIcon icon={ faSlidersH } />
        </a>
      </div>
  );
};