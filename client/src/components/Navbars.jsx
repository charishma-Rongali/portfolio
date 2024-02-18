import React from "react";
import About from "./About";
import Projects from "./Projects";
function Navbars() {
  return (
    <div className="container " >
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4">CHARISHMA RONGALI</span>
      </a>
      <a href="#about" className="nav-link active" aria-current="page">About</a>
      <a href="#projects" className="nav-link">Portfolio Projects</a>
      <a href="#" className="nav-link">Certifications</a>
      <a href="#" className="nav-link">contact</a>
    </header>
  </div>
  );
}

export default Navbars;