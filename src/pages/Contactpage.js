import BingMapsReact from "bingmaps-react";

const Contactpage = () => {
    return(
        <main class="flexbox-col contactpage">
            <div class="form-wrapper">
              <form id="form" method="post" name="emailform" action="email.php">
                <h3 class="form-title">Contact Form</h3>
                <p class="form-undertitle">Feel free to contact me !</p>
                <div class="form-input-grid">
                  <div>
                    <p class="form-text">Username*</p>
                    <div class="form-input-wrapper flexbox-left">
                      <i class="uil uil-user"></i>
                      <input class="form-input" id="uname" name="uname" type="text" placeholder="Username" aria-label="" required />
                    </div>
                  </div>
                  <div>
                  <p class="form-text">Password*</p>
                  <div class="form-input-wrapper flexbox-left">
                    <i class="uil uil-asterisk"></i>
                    <input class="form-input" id="pword" name="pword" type="password" placeholder="Password" aria-label="" required />
                  </div>
                </div>
              </div>
              <div class="form-input-max">
                <p class="form-text">Email*</p>
                <div class="form-input-wrapper flexbox-left">
                  <i class="uil uil-at"></i>
                  <input class="form-input" id="email" name="email" type="email" placeholder="Email" aria-label="" required />
                </div>
              </div>
              <div class="form-input-max">
                <p class="form-text">Message* (Max 500)</p>
                <div id="textarea" class="form-input-wrapper flexbox-left-start">
                  <i class="uil uil-comment-dots"></i>
                  <textarea class="form-input" id="message" name="message" placeholder="Your message" maxlength="500" aria-label="" required></textarea>
                </div>
               </div>
               <div class="form-input-max flexbox-left">
                <div class="button-wrapper">
                  <button id="form-button" type="submit" class="button btn-warning"><i class="uil uil-envelope-heart"></i> Send<div class="btn-warning"></div></button>
                 </div>
               </div>
             </form>
            </div>
            <h1 class="mt-5 mb-1">Find me in Penang !</h1>
            <h1 class="textlocation mb-4">This is where I located feel free to find me !</h1>
            <BingMapsReact class="mapss"
      bingMapsKey="your bing maps API key goes here"
      height="500px"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="100%"
      viewOptions={{
        center: { latitude: 100.4590, longitude: 5.3655 },
        mapTypeId: "grayscale",
      }}
    />
        </main>
    )
}

export default Contactpage;