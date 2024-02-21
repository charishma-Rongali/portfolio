import React from "react";
function About() {
  return (
    <section className="pt-md-11 pt-lg-16 col-12 d-flex align-items-center justify-content-center vh-100 " id="aboutpage">
    <div className="container">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 px-12 col-lg-6 order-md-2 ml-auto">
            <img src="./images/charishma.png" classname="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate px-12" alt="my_image" data-aos="fade-up" data-aos-delay="100" />
          </div>
          <div className="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate" data-aos="fade-up">
            <h1 className="display-3 text-center text-md-start">
              Hi This is <span class="text-primary">Charishma Rongali</span>. <br />
              web Developer
            </h1>
            <p className="lead text-center text-md-start text-body-secondary mb-6 mb-lg-8">
              Build a beautiful, modern website with flexible  components.
            </p>
            <div className="text-center text-md-start">
              <a href="#projectspage" className="btn btn-primary shadow lift me-1">
              projects <i className="fe fe-arrow-right d-none d-md-inline ms-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
export default About;