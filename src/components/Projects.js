import React from 'react';

class Projects extends React.Component {
    render() {
        return (
            <section class="content-section" id="portfolio">
                <div class="container">
                    <div class="content-section-heading text-center">
                        {/* <h3 class="text-secondary mb-0">Portfolio</h3> */}
                        <h2 class="mb-5">Recent Projects & Resume</h2>
                    </div>
                <div class="row no-gutters">
                    <div class="col-lg-6">
                    <a class="portfolio-item" href="https://coding-knights.herokuapp.com/" target="_blank">
                        <div class="caption">
                        <div class="caption-content">
                            <div class="h2">Coding Knights' Chess</div>
                            <p class="mb-0">A chess app made with Rails MVC, PostgreSQL DB, jQuery, Devise, Omniauth, and Pusher. Users can create accounts and play chess with friends!</p>
                        </div>
                        </div>
                        <img class="img-fluid" src="img/chess.jpg" alt=""/>
                    </a>
                    </div>
                    <div class="col-lg-6">
                    <a class="portfolio-item" href="https://nomster-raquibbi.herokuapp.com/" target="_blank">
                        <div class="caption">
                        <div class="caption-content">
                            <div class="h2">Nomster</div>
                            <p class="mb-0">A Yelp clone that integrates with the Google Maps API and includes features like user comments, star ratings, image uploading, and user authentication! Find a great local place to <em>nom nom nom.</em></p>
                        </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio-2.jpg" alt=""/>
                    </a>
                    </div>
                    <div class="col-lg-6">
                    <a class="portfolio-item" href="http://flixter-kibi.herokuapp.com/" target="_blank">
                        <div class="caption">
                        <div class="caption-content">
                            <div class="h2">Flixter</div>
                            <p class="mb-0">A two-sided, video-streaming marketplace platform that features credit card payment capabilities, user role management, complex user interfaces, and advanced database relationships.</p>
                        </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio-3.jpg" alt=""/>
                    </a>
                    </div>
                    <div class="col-lg-6">
                    <a class="portfolio-item" href="#!">
                        <div class="caption">
                        <div class="caption-content">
                            <div class="h2">Bug Tracker</div>
                            <p class="mb-0">Coming Soon...</p>
                        </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio-4.jpg" alt=""/>
                    </a>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

export default Projects; 