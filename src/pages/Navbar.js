import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import Homepage from '../pages/Homepage';
import Maps from '../pages/Maps';
// import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";


const Navbars = () => {
    return (
        <nav>
         <div class="logo">
         <NavLink class="navbardesign" to="/Homepage">Danny</NavLink>

         </div>
         <input type="checkbox" id="click"/>
         <label for="click" class="menu-btn">
         <i class="fas fa-bars"></i>
         </label>
         <ul>
            <NavLink class="navbardesign" to="/Homepage"><li>Home</li></NavLink>
            <NavLink class="navbardesign" to="/Aboutme"><li>About</li></NavLink>
            <NavLink class="navbardesign" to="/Archievement"><li>Skills</li></NavLink>
            <NavLink class="navbardesign" to="/Project"><li>Projects</li></NavLink>
            <NavLink class="navbardesign" to="/Contactpage"><li>Contact</li></NavLink>
         </ul>

      </nav>
    )   
}

export default Navbars;