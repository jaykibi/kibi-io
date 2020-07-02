import React from 'react';

class TechStack extends React.Component {
    render() {
        return (
        <section class="content-section bg-primary text-white text-center" id="services">
        <div class="container">
            <div class="content-section-heading">
            {/* <h3 class="text-secondary mb-0">Services</h3> */}
            <h2 class="mb-5">Things I Know</h2>
            </div>
            <div class="row">
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
                <i>
                    <img class="kibi_icons mb-3" src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-512.png"/>
                </i>
                </span>
                <h4>
                <strong>Ruby on Rails</strong>
                </h4>
                <p class="text-faded mb-0">Rails MVC was used in most of my projects</p>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
                <i>
                    <img class="kibi_icons mb-3" src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"/>
                </i>
                </span>
                <h4>
                <strong>Python</strong>
                </h4>
                <p class="text-faded mb-0">For the Data Structures and Algorithms ;)</p>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
                <i>
                    <img class="kibi_sql mb-1" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/postgresql-512.png"/>
                </i>
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
                <i>
                    <img class="kibi_agile mb-4" src="https://cdn0.iconfinder.com/data/icons/project-management-aqua-vol-1/500/Agile-512.png"/>
                </i>
                </span>
                <h4>
                <strong>AGILE</strong>
                </h4>
                <p class="text-faded mb-0">Sprints are my thing, both physical and coding</p>
            </div>
            </div>
        </div>
        </section>
        )
    }
}

export default TechStack; 