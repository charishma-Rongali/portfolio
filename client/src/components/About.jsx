  import React from "react";

  function About() {
    return (
      <section className="pt-md-5 pt-lg-16 col-12 d-flex align-items-center justify-content-center" id="aboutpage">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 order-md-2">
              <img src="Images/charishma.png" className="img-fluid mb-4" alt="my_image" />
            </div>
            <div className="col-12 col-md-6 order-md-1">
              <h1 className="display-4">Hi, This is <span className="text-primary">Charishma</span>.</h1>
              <p className="lead">Web Developer</p>
              <p>Build a beautiful, modern website with flexible components.</p>
              <a href="#projectspage" className="btn btn-primary shadow lift me-1">Projects</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  


  export default About;
