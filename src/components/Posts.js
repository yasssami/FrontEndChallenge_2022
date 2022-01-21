import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import './Posts.css';
import NASAImg from './NASAImg.js';
import './NASAImg.css';
import LikeButton from './LikeButton';
export default function Posts(){
    return (
    <div className="posts">
        <div className="posts__header">
        <LikeButton />
        <Avatar
            className="posts__avi"
            src="https://www.gazettenet.com/getattachment/c2db69d5-0338-444c-a4a7-2b58027e66cd/b6-nasa-logo-biz-072219-ph1"
            alt="NASA"
        />
        <h3>NASA</h3>
        </div>
    <NASAImg />
    </div>

  );
}