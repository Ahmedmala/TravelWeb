import React from "react";
import { NavLink } from "react-router-dom"; 
import '../CSS/HomeAbout.css';
const Same =(props)=>{

    return(
        <>
    <div className="mainSection">
        <div className="contentBox">
          <h1 style={{ fontStyle: "oblique" }}>{props.title}</h1>
          <h2 style={{ fontStyle: "italic" }}>
          {props.title1}
          </h2>
          <p>
          {props.text}
          </p>
          <div className="btnBox">
            <div className="btn">
              <NavLink to={props.path} className="readMore" >
              {props.btn}
              </NavLink>
            </div>
          </div>
        </div>
        <div className="imgContainer">
        <img src={props.imgsrc} alt="home" className="hun"/>
        </div>
      </div>
       </>
    )

}
export default Same;