import aboutmepic from "../component/dannypic.jpg";

const Aboutme = () => {
    return(
      <section id="about" class="section">
      <div class="container aboutme"> 

        <p class="text-center mb-2 wow fadeInUp" ><span class="bg-warning text-dark px-2">About Me</span></p>
        <h2 class="textsize font-weight-900 text-center mb-5 wow fadeInUp" >Know Me More</h2>
        
        <div class="mt-5">
          <div class="row">
            <div class="col-lg-8  text-lg-left wow fadeInUp" >
              <h2 class="text-8 font-weight-200 mb-3">Hi, I'm <span class="font-weight-700 border-bottom border-3 border-warning">Danny</span></h2>
              <p class="text-5">I'm a Web Developer &amp; Mobile App developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto.</p>
            </div>
            <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.2s" >
              <div class="featured-box style-4">
                <div class="featured-box-icon text-25 font-weight-500 bg-warning rounded-circle"><span class="wow heartBeat" data-wow-delay="1.3s" ><h1 class="textsizeword">1</h1></span></div>
                <h3 class="text-7 wow rubberBand" data-wow-delay="2s" >Years of <span class="font-weight-700">Experiance</span></h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-6 col-lg-3 my-2 wow fadeInUp" >
            <p class="text-muted font-weight-500 mb-0">Name:</p>
            <p class="text-4 text-dark font-weight-600 mb-0">Danny</p>
          </div>
          <div class="col-6 col-lg-3 my-2 wow fadeInUp" data-wow-delay="0.2s" >
            <p class="text-muted font-weight-500 mb-0">Email:</p>
            <p class="text-4 text-dark font-weight-600 mb-0"><a class="text-dark font-weight-600 btn-link" href="">leepohhock017@gmail.com</a></p>
          </div>
          <div class="col-6 col-lg-3 my-2 wow fadeInUp" data-wow-delay="0.3s" >
            <p class="text-muted font-weight-500 mb-0">Date of birth:</p>
            <p class="text-4 text-dark font-weight-600 mb-0">7 October, 2000</p>
          </div>
          <div class="col-6 col-lg-3 my-2 wow fadeInUp" data-wow-delay="0.4s" >
            <p class="text-muted font-weight-500 mb-0">From:</p>
            <p class="text-4 text-dark font-weight-600 mb-0">Penang, Malaysia.</p>
          </div>
        </div>
      </div>
      <div class="resumepart">
      <div class="container  mt-5"> 
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
        

        <p class="text-center mt-5 wow fadeInUp" ><a href="https://docs.google.com/document/d/1vcp95jK1r4okK5VzMPK4k5Qwz0HfCK6S7BMhDJCplOY/edit?usp=sharing" class="btn btn-outline-dark shadow-none rounded-0">View my Resume</a></p>
      </div>
      </div>

    </section>

    
    )
}

export default Aboutme;