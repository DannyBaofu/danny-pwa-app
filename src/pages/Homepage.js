import {Container} from 'react-bootstrap';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import profilepic from '../component/dannypic.jpg'

const Homepage = () => {
    return (
        <div class="flex-container">
            <div class = "content"><img class="profilepic" src={profilepic}/></div>  
            <div class = "content">
                <h1> Danny  </h1>
                <h2>A Web and Mobile App Developer .</h2>
                <h5>- Know More About Me -</h5>
                <buttonview ><i class="fa fa-angle-down fa-2x" aria-hidden="true"></i></buttonview>
            </div>
        </div>

    )   
}

export default Homepage;