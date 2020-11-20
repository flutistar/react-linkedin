import React, {useState, useEffect} from "react";
import './Post.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


export const Post = (props) => {

    return (
        <div className="post mt-3">
            <div className="post-header d-flex">
                <img className="avatar" src={props.data.avatar}></img>
                <span className="poster-status"></span>
                <div className="poster-detail">
                    <div className="poster-name">
                        {props.data.fullName}
                    </div>
                    <div className="poster-title">
                        {props.data.title}
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="post-body">
                <div className="post-text p-3">{props.data.summary}</div>
                <div className="post-img">
                    <img src={props.data.postImg}></img>
                </div>
            </div>
            <div className="line"></div>
            <div className="post-footer p-3">
                <a><FontAwesomeIcon icon={faThumbsUp} />Like</a>
                <a><FontAwesomeIcon icon={faComment} />Comment</a>
                <a><FontAwesomeIcon icon={faShare} />Share</a>
                <a><FontAwesomeIcon icon={faPaperPlane} />Send</a>
            </div>
        </div>
    );
};