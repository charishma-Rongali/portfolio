import React from "react";


function Navbars() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a href="/" className="navbar-brand"  style={{ overflowWrap: 'break-word', maxWidth: '100vw' }}>CHARISHMA RONGALI</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#aboutpage" className="nav-link active" aria-current="page">About</a>
            </li>
            <li className="nav-item">
              <a href="#projectspage" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#Certificatespage" className="nav-link">Certificates</a>
            </li>
            <li className="nav-item">
              <a href="#contactpage" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default Navbars;
