import React, {useContext} from "react";
import UserContext from "./UserContext";
import {NavLink} from "react-router-dom";
import {Navbar, Nav, NavItem, Container} from "reactstrap";
import './NavBar.css'

const NavBar = ({logout}) => {
  const {currentUser} = useContext(UserContext);
    return (
      <nav className="NavBar">
        <div className="nav-container">
            <NavLink exact to="/" className="navbar-brand">
              Jobly
            </NavLink>
        
              <div className="nav-links right-align">
              {currentUser ? (
                <>
                    <NavLink to="/companies" className="nav-link"> Companies </NavLink>
                    <NavLink to="/jobs" className="nav-link"> Jobs </NavLink>
                    <NavLink to="/profile" className="nav-link"> Profile </NavLink>
                    <NavLink to="/" onClick={logout} className="nav-link"> Logout {currentUser.username} </NavLink> 
                </>
              ) : (
                <>
                    <NavLink to="/login" className="nav-link"> Login </NavLink>
                    <NavLink to="/signup" className="nav-link"> Signup </NavLink>
                </>
              )}
              </div>
            </div>
        </nav>
    );
}

export default NavBar;