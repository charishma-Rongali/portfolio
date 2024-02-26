import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nquoq4b', 'template_x1awwir', form.current, {
        publicKey: 'HooNjsV96rUUZia0Z',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contactpage">
      <div className="container pt-5">
        <div className="row align-items-center vh-75">
          <div className="col-12 col-md-5 col-lg-6 order-md-1 "style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img src="Images/contact.png" alt="contact_me" style={{ width: "80%", height: "auto" }} />
          </div>
          <div className="col-12 col-md-7 col-lg-6 order-md-2">
            <form ref={form} onSubmit={sendEmail} className="my-form">
              <label htmlFor="from_name" className="text-white p-2">Name:</label>
              <input type="text" name="from_name" className="form-control mb-3" />
              <label htmlFor="from_email" className="text-white p-2">Email:</label>
              <input type="email" name="from_email" className="form-control mb-3" />
              <label htmlFor="message" className="text-white p-2">Message:</label>
              <textarea name="message" className="form-control mb-3" rows="5" />
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
