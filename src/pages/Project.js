// import background from "../component/backgroundcars.jpg";
import chiakbo from "../component/chiakbo.png";
import whiteboard from "../component/whiteboard.png";
import eduquestion from "../component/eduquestionapp.png";
import seasafety from "../component/seasafetysystem.png";
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Project = () => {
    return(
            
            <div class="container mt-5 projects">
                <p class="text-center mb-2 wow fadeInUp mt-5" ><span class="bg-warning text-dark px-2">Projects</span></p>
                <h2 class="textsize font-weight-900 text-center mb-5 wow fadeInUp" >The projects I had done before </h2>
            <Carousel class="mt-5">
                <div >
                    <img src={chiakbo} />
                    <p className="legend">ChiakBo An application to help the refugee to earn extra income by selling food.</p>
                </div>
                <div>
                    <img src={whiteboard} />
                    <p className="legend">A Automated Whiteboard Cleaner created in 2013 my first project helps teacher to clean the whiteboard automatically.</p>
                </div>
                <div>
                    <img src={seasafety} />
                    <p className="legend">A sea bouyant which can help fisherman to detect the condition of the sea to secure their safety before going to work.</p>
                </div>
            </Carousel>
            </div>

    )
}

export default Project;