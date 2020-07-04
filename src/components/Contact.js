import React from 'react';

class Contact extends React.Component {
    
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
          status: ""
        };
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }

    render() {
        const { status } = this.state;
        return (
            <section class="mb-5">
                <h2 class="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>
                
                <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Or would like to hire me :) ? Please don't hesitate to contact me directly here.</p>

                <div class="row">

                    <div class="col-md-6 offset-3 mb-md-0 mb-5">
                        <form
                            onSubmit={this.submitForm}
                            action="https://formspree.io/xeqrreyp"
                            method="POST"
                        >

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
                        
                        <div class="text-center text-md-right">
                            {status === "SUCCESS" ? <p>Thanks!</p> : <button class="btn btn-primary">Submit</button>}
                            {status === "ERROR" && <p>Ooops! There was an error.</p>}
                        </div>
                        

                        
                        </form>
                    </div>

                </div>

            </section>      
            
            
        )
    }
}

export default Contact;