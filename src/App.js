import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
        
  {/* <a class="menu-toggle rounded" href="#">
    <i class="fa fa-bars"></i>
  </a> */}


  <nav id="sidebar-wrapper">
    <ul class="sidebar-nav">
      <li class="sidebar-brand">
        <a class="js-scroll-trigger" href="#page-top">Start Bootstrap</a>
      </li>
      <li class="sidebar-nav-item">
        <a class="js-scroll-trigger" href="#page-top">Home</a>
      </li>
      <li class="sidebar-nav-item">
        <a class="js-scroll-trigger" href="#about">About</a>
      </li>
      <li class="sidebar-nav-item">
        <a class="js-scroll-trigger" href="#services">Services</a>
      </li>
      <li class="sidebar-nav-item">
        <a class="js-scroll-trigger" href="#portfolio">Portfolio</a>
      </li>
      <li class="sidebar-nav-item">
        <a class="js-scroll-trigger" href="#contact">Contact</a>
      </li>
    </ul>
  </nav>

  
  <header class="masthead d-flex">
    <div class="container text-center my-auto">
      <h1 class="mb-1">Hi, I'm Kibi</h1>
      <h3 class="mb-5">
        <em>and this is my website!</em>
      </h3>
      {/* <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a> */}
    </div>
    <div class="overlay"></div>
  </header>

  
  <section class="content-section bg-light" id="about">
    <div class="container text-center">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <h2>Welcome to my website!</h2>
          <p class="lead mb-5">
            Here you will find some examples of projects I have done and projects I'm currently working on! Enjoy :)
          </p>
          <p>
           [ p.s. This website was made using <strong>React</strong> with a pretty <strong>Bootstrap</strong> theme ]
          </p>
          
          {/* <a class="btn btn-dark btn-xl js-scroll-trigger" href="#services">What We Offer</a> */}
        </div>
      </div>
    </div>
  </section>

  
  <section class="content-section bg-primary text-white text-center" id="services">
    <div class="container">
      <div class="content-section-heading">
        {/* <h3 class="text-secondary mb-0">Services</h3> */}
        <h2 class="mb-5">Things I Know</h2>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
          <span class="service-icon rounded-circle mx-auto mb-3">
            <i class="icon-screen-smartphone"></i>
          </span>
          <h4>
            <strong>Ruby on Rails</strong>
          </h4>
          <p class="text-faded mb-0">Rails MVC was used in most of my projects</p>
        </div>
        <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
          <span class="service-icon rounded-circle mx-auto mb-3">
            <i class="icon-pencil"></i>
          </span>
          <h4>
            <strong>Python</strong>
          </h4>
          <p class="text-faded mb-0">For the Data Structures and Algorithms ;)</p>
        </div>
        <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
          <span class="service-icon rounded-circle mx-auto mb-3">
            <i class="icon-like"></i>
          </span>
          <h4>
            <strong>SQL</strong>
          </h4>
          <p class="text-faded mb-0">
            I   <i class="fa fa-heart"></i>  querying databases 
          </p>
        </div>
        <div class="col-lg-3 col-md-6">
          <span class="service-icon rounded-circle mx-auto mb-3">
            <i class="icon-mustache"></i>
          </span>
          <h4>
            <strong>AGILE</strong>
          </h4>
          <p class="text-faded mb-0">Sprints are my thing, both physical and coding</p>
        </div>
      </div>
    </div>
  </section>

  
  {/* <section class="callout">
    <div class="container text-center">
      <h2 class="mx-auto mb-5">Welcome to
        <em>your</em>
        next website!</h2>
      <a class="btn btn-primary btn-xl" href="https://startbootstrap.com/themes/stylish-portfolio/">Download Now!</a>
    </div>
  </section> */}

  
  <section class="content-section" id="portfolio">
    <div class="container">
      <div class="content-section-heading text-center">
        {/* <h3 class="text-secondary mb-0">Portfolio</h3> */}
        <h2 class="mb-5">Recent Projects</h2>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6">
          <a class="portfolio-item" href="#!">
            <div class="caption">
              <div class="caption-content">
                <div class="h2">Stationary</div>
                <p class="mb-0">A yellow pencil with envelopes on a clean, blue backdrop!</p>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio-1.jpg" alt=""/>
          </a>
        </div>
        <div class="col-lg-6">
          <a class="portfolio-item" href="#!">
            <div class="caption">
              <div class="caption-content">
                <div class="h2">Ice Cream</div>
                <p class="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio-2.jpg" alt=""/>
          </a>
        </div>
        <div class="col-lg-6">
          <a class="portfolio-item" href="#!">
            <div class="caption">
              <div class="caption-content">
                <div class="h2">Strawberries</div>
                <p class="mb-0">Strawberries are such a tasty snack, especially with a little sugar on top!</p>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio-3.jpg" alt=""/>
          </a>
        </div>
        <div class="col-lg-6">
          <a class="portfolio-item" href="#!">
            <div class="caption">
              <div class="caption-content">
                <div class="h2">Workspace</div>
                <p class="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio-4.jpg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>

   
  <section class="content-section bg-primary text-white">
    <div class="container text-center">
      <h2 class="mb-4">The buttons below are impossible to resist...</h2>
      <a href="#!" class="btn btn-xl btn-light mr-4">Click Me!</a>
      <a href="#!" class="btn btn-xl btn-dark">Look at Me!</a>
    </div>
  </section>

  
  <div id="contact" class="map">
    <iframe src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe>
    <br />
    <small>
      <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"></a>
    </small>
  </div>

  
  <footer class="footer text-center">
    <div class="container">
      <ul class="list-inline mb-5">
        <li class="list-inline-item">
          <a class="social-link rounded-circle text-white mr-3" href="#!">
            <i class="icon-social-facebook"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="social-link rounded-circle text-white mr-3" href="#!">
            <i class="icon-social-twitter"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="social-link rounded-circle text-white" href="#!">
            <i class="icon-social-github"></i>
          </a>
        </li>
      </ul>
      <p class="text-muted small mb-0">Copyright &copy; kibi.io 2020</p>
    </div>
  </footer>
    </div>
  );
}

export default App;
