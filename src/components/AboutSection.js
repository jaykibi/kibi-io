import React from 'react';

class AboutSection extends React.Component {
    render() {
        return (
            <section class="content-section bg-light" id="about">
            <div class="container text-center">
              <div class="row">
                <div class="col-lg-10 mx-auto">
                  <h2>Welcome to my website!</h2>
                  <p class="lead mb-5">
                    Here you will find some examples of projects I have completed and projects I'm currently working on! Enjoy :)
                  </p>
                  <p>
                   [ p.s. This website was made using <strong>React</strong> with a pretty <strong>Bootstrap</strong> theme ]
                  </p>
                  
                  {/* <a class="btn btn-dark btn-xl js-scroll-trigger" href="#services">What We Offer</a> */}
                </div>
              </div>
            </div>
          </section>
        )
    }
}

export default AboutSection; 