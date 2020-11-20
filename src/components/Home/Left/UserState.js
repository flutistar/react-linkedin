import React, {useState, useEffect} from "react";
import './UserState.scss'
import avatar from '../../../assets/images/avatar.png'
import bgImg from '../../../assets/images/b2.jpg'
export const UserState = () => {

    return (
        <div className="user-state">
            <div className="user-detail">
                <img className="bg-img" src={bgImg}></img>
                <div className="user-avatar">
                    <img className="avatar" width="72" height="72" src={avatar}></img>
                </div>
                <div className="user-full-name">
                    <p>Alexander Rezzik</p>
                </div>
                <div className="user-title pb-2">
                    <p>Full Stack Engineer</p>
                </div>
            </div>
            <div className="line"></div>

            <div className="state pt-3 pb-3">
                <div className="profile-viewed grey-7 item">
                    <span className="mr-auto">Who viewed your profile</span>
                    <a className="ml-auto">1667</a>
                </div>
                <div className="connections grey-7 item">
                    <span className="mr-auto">Connections</span>
                    <a className="ml-auto">3024</a>
                </div>
            </div>

            <div className="line"></div>


        </div>
    );
};