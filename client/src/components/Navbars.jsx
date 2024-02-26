import React from "react";

function Navbars() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a href="/" className="navbar-brand" style={{ color: 'white' }}>CHARISHMA RONGALI</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#aboutpage" className="nav-link active" aria-current="page" style={{ color: 'white' }}>About</a>
              </li>
              <li className="nav-item">
                <a href="#projectspage" className="nav-link" style={{ color: 'white' }}>Projects</a>
              </li>
              <li className="nav-item">
                <a href="#Certificatespage" className="nav-link" style={{ color: 'white' }}>Certificates</a>
              </li>
              <li className="nav-item">
                <a href="#contactpage" className="nav-link" style={{ color: 'white' }}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbars;
