import React from 'react'
import Title from '../Global/Title';


const Contact = () => {
    return ( 
        <section className="contact py-5">
        <Title title="Contact us"/>
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form action="https://formspree.io/indiverimail@gmail.com" method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" id="name" placeholder="Esteban Indiveri"/> 
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="correo@email.com"/> 
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" className="form-control" rows="5" placeholder="your Message Here..."/>
                </div>

                <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">Submit</button>
                
            </form>
        </div>
        </section>
     );
}
 
export default Contact;