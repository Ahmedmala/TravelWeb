import React from "react";
import logo from "../Images/Logo.png";
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import '../CSS/ListStyle.css';
const List = () => {
  return (
    <>
      <header>
        <div className="container container-flex">
          <div>
            <img src={logo} alt="logo" className="logo" />
          </div>
          <nav>
            <div className="list">
              <NavLink exact to="/" className="listItem" activeClassName="activeItem">
                Home
              </NavLink>
              <NavLink to="/About" className="listItem" activeClassName="activeItem">
                About
              </NavLink>
              <NavLink to="/Services" className="listItem" activeClassName="activeItem">
                Services
              </NavLink>
              <NavLink to="/Contact" className="listItem" activeClassName="activeItem">
                Contact
              </NavLink>
            </div>
          </nav>
          <div className="icons">
            <SearchIcon className="icon"/>
            <PersonIcon className="icon"/>
            <CallIcon className="icon"/>
          </div>
        </div>
      </header>
    </>
  )
}
export default List;
