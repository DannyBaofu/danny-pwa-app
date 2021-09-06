import React from "react";
// import './index.css';
import { ProgressBar } from "react-bootstrap";
const Education = () => {
    return(
      <div class="container"> 
        <p class="text-center mb-2 wow fadeInUp mt-5" ><span class="bg-warning text-dark px-2">Resume</span></p>
        <h2 class="text-10 font-weight-600 text-center mb-5 wow fadeInUp" >A summary of My Resume</h2>

        
        <div class="row"> 
          <div class="col-lg-6 wow fadeInUp" >
            <h2 class="text-7 font-weight-600 mb-4 pb-2">My Education</h2>
            <div class="border-left border-2 border-warning pl-3">
              <h3 class="text-5">SJK(C) Kay Sin</h3>
              <p class="mb-2">SJK(C) Kay Sin / 2006 - 2011</p>
              <p class="text-muted">Primary School Studies.</p>
              <p></p>
              <hr class="my-4 bg-dark"/>
              <h3 class="text-5">SMK Taman Sejahtera</h3>
              <p class="mb-2">SMK Taman Sejahtera / 2012 - 2017</p>
              <p class="text-muted">Secondary school studies. A head prefect in the school.</p>
              <hr class="my-4"/>
              <h3 class="text-5">Forward School</h3>
              <p class="mb-2">Forward School / 2019 - Current</p>
              <p class="text-muted">Studying Nitro Degree Software Engineering</p>
            </div>
          </div>

          <div class="col-lg-6 mt-5 mt-lg-0 wow fadeInUp" data-wow-delay="0.2s" >
            <h2 class="text-7 font-weight-600 mb-4 pb-2">My Experience</h2>
            <div class="border-left border-2 border-warning pl-3">
              <h3 class="text-5">Internship 2018 with Agmo Studio</h3>
              <p class="mb-2">Agmo Studio / August - September</p>
              <p class="text-muted">A choosen student by MDEC to participate in an internship with Agmo Studio locate in Damansara, Selangor. Develop Moblie Application on Play Store.</p>
              <hr class="my-4"/>
              <h3 class="text-5">An Internship with Vitrox</h3>
              <p class="mb-2">Vitrox Technologies Sdn Bhd / 2019 - Current</p>
              <p class="text-muted">Industrial Attachment with Vitrox Company as a Intern.</p>
              <hr class="my-4"/>
              <h3 class="text-5">Web Developer</h3>
              <p class="mb-2">Self-Employment / 2019 - Current</p>
              <p class="text-muted">Self-Employment recieving jobs from other sources.</p>
            </div>
          </div>
        </div>
        

        <h2 class="text-7 font-weight-600 mb-4 pb-2 mt-5 wow fadeInUp" >My Skills</h2>
        <div class="row">
          <div class="col-md-6 wow fadeInUp" >
            <p class="font-weight-500 text-left mb-2">Web Design <span class="float-right">70%</span></p>
            <div class="progress progress-sm mb-4 bg-warning">
            </div>
            <p class="font-weight-500 text-left mb-2">HTML/CSS <span class="float-right">95%</span></p>
            <div class="progress progress-sm mb-4 bg-warning">
            </div>
            <p class="font-weight-500 text-left mb-2">JavaScript <span class="float-right">80%</span></p>
            <div class="progress progress-sm mb-4 bg-warning">
            </div>
          </div>
          <div class="col-md-6 wow fadeInUp" data-wow-delay="0.2s" >
            <p class="font-weight-500 text-left mb-2">React JS <span class="float-right">80%</span></p>
            <div class="progress progress-sm mb-4 bg-warning">
            </div>
            <p class="font-weight-500 text-left mb-2">Python <span class="float-right">50%</span></p>
            <div class="progress progress-sm mb-4 bg-warning">
            </div>
            <p class="font-weight-500 text-left mb-2">Bootstrap <span class="float-right">99%</span></p>
            <div class="progress progress-sm mb-4 bg-warning">
            </div>
          </div>
        </div>
        <p class="text-center mt-5 wow fadeInUp" ><a href="https://docs.google.com/document/d/1vcp95jK1r4okK5VzMPK4k5Qwz0HfCK6S7BMhDJCplOY/edit?usp=sharing" class="btn btn-outline-dark shadow-none rounded-0">View my Resume</a></p>
      </div>
    )
}  

export default Education;