import React, {useState} from "react";
import './Item.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Item = (props) => {
    return (
        <a className="item">
            <span className="icon">
                <FontAwesomeIcon icon={props.icon} />
            </span>            
            <span>{props.label}</span>            
            <span>{props.num}</span>
        </a>
    );
};