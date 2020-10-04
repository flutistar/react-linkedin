import React, {useState} from "react";
import './Advertise.scss'
import jobAdvertise from '../../../assets/images/my_comm.PNG'
export const Advertise = () => {
    return (
        <div className="advertise">
            <img src={jobAdvertise}></img>
        </div>
    );
};