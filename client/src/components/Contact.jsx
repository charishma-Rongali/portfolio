//React
//React(opens new window) is a JavaScript library for building user interfaces. EmailJS works with all modern frameworks, and React is no exception.

// Below we show how to create the contact form components, ContactUs.js:

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
    <div id="contactpage" className="vh-100">
    <div className='container'>
    <div className=" d-flex flex-wrap justify-content-between " >
    <form ref={form} onSubmit={sendEmail} className='col-12 col-md-5  col-lg-6 order-md-2 ml-auto d-flex align-items-center justify-content-center'>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
    </div>
    </div>
  );
};

export default Contact;