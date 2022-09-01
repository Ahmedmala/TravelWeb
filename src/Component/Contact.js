import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/ContactStyle.css";

const Contact = () => {
  return (
    <>
      <h1> Contact Us </h1>
      <form className="contact">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter Your Name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter Your Email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter Your Password" />
        </div>

        <div>
          <label htmlFor="number">Number</label>
          <input type="number" placeholder="Enter Your Number" />
        </div>

        <div className="btnC">   
          <NavLink to="/" className="submit" onClick={() => "success"}>
            SUBMIT{" "}
          </NavLink>
        </div>
      </form>
    </>
  );
};
export default Contact;
