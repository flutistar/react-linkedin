import React, {useState, useEffect} from "react";
import './LeftCol.scss'
import { UserState } from '../Left/UserState'


export const LeftCol = () => {
    

    return (
        <div className="home left-col">
            <UserState />
        </div>
    );
};