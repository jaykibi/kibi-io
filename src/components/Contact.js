import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <section class="mb-5">
                <h2 class="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>
                
                <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Or would like to hire me :) ? Please don't hesitate to contact me directly.</p>

                <div class="row">

                    
                    <div class="col-md-6 offset-3 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            
                            <div class="row">

                                
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control"/>
                                        <label for="name" class="">Your name</label>
                                    </div>
                                </div>
                                

                                
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="email" name="email" class="form-control"/>
                                        <label for="email" class="">Your email</label>
                                    </div>
                                </div>
                                

                            </div>
                            

                            
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <input type="text" id="subject" name="subject" class="form-control"/>
                                        <label for="subject" class="">Subject</label>
                                    </div>
                                </div>
                            </div>
                            

                            
                            <div class="row">

                                
                                <div class="col-md-12">

                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                        <label for="message">Your message</label>
                                    </div>

                                </div>
                            </div>
                            

                        </form>

                        <div class="text-center text-md-right">
                            <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                        </div>
                        <div class="status"></div>
                    </div>

                </div>

            </section>      
            
            
        )
    }
}

export default Contact;