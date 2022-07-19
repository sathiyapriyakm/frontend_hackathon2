import React from "react";

import { useNavigate } from 'react-router-dom'

export function NotFound() {
    const navigate=useNavigate();
  return <div clsssName="page-not-found" style={{marginTop:"100px"}}>
    <div style={{color:"blue",textAlign:"center",fontSize:"50px"}}>
        <a href="#" onClick={() => navigate("/")}  className="small" >Back to home</a>
    </div>
    <img src="https://cdn.vectorstock.com/i/1000x1000/75/83/404-error-page-not-found-plug-graphic-vector-19997583.webp" alt="404 page not found"></img>
    
  </div>;

}
