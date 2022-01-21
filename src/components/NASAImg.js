import React from "react";
import {useState,useEffect} from 'react';
import './LikeButton.js';
import LikeButton from "./LikeButton.js";
export default function NASAimg(){
const [photoData,setPhotoData]=useState({});
     useEffect(()=>{
      fetchPhoto();
       async function fetchPhoto(){
         const res=await fetch('https://api.nasa.gov/planetary/apod?start_date=2021-12-24&end_date=2022-01-21&api_key=GgeuqVMnrrtBErYnh8YhtfJ2QFH577O6wIT1QlJI');
         const data=await res.json();
         setPhotoData(data[Math.floor(Math.random()*data.length)]);
       }
     },[]);
     return (
         <div className='post__body'>
             <img className='NASA__image'
             src={photoData.hdurl}
             alt={photoData.title}
             />
             <h4 
             className='post__text'><strong>NASA</strong>: {photoData.title} on {photoData.date} (APOD)
             </h4>
             <p className="post__caption">{photoData.explanation}</p>
         </div>
     )
}