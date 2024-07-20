import React from "react";

function About() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100" id="aboutpage">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 order-md-2">
            <img src="Images/charishma.png" className="img-fluid mb-4" alt="my_image" />
          </div>
          <div className="col-12 col-md-6 order-md-1 text-white" style={{ fontFamily: 'serif', fontSize: '20px' }}>
            <h1 className="display-4">Hi, I'm <span>Charishma Rongali</span></h1>
            <p>A passionate web developer dedicated to crafting exceptional digital experiences</p>
            <p style={{ fontFamily: "Lucida Console", fontSize: "30px" }}>Skills</p>
            <div className="d-flex flex-wrap align-items-center">
              <i className="fa-brands fa-react p-2"></i>
              <i className="fa-brands fa-node-js p-2"></i>
              <i className="fa-solid fa-database p-2"></i>
              <i className="fa-brands fa-html5 p-2"></i>
              <i className="fa-brands fa-css3 p-2"></i>
              <i className="fa-brands fa-js p-2"></i>
              <i className="fa-brands fa-java p-2"></i>
              <i className="fa-solid fa-c p-2"></i>
            </div>
            <div className="mt-4">
              <a href="#projectspage" className="btn btn-primary shadow lift me-1">Projects</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
