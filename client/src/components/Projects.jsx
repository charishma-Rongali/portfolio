import React from "react";
import { projectdata } from "../Data";

function Projects() {
    return (
        <section id="projectspage"> {/* Full height section */}
            <div className="container">
                <div className="col-12 order-md-1">
                <h1 className="text-center" style={{ color: 'white', fontFamily: "arial", fontSize: "2 rem",padding: "20px" }}>Projects</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    {projectdata.map((project) => (
                        <div key={project.id} className="col mb-4">
                            <div className="card h-100"> {/* Ensure all cards have the same height */}
                                <img src={project.image} className="card-img-top img-fluid" alt={project.title} />
                                <div className="card-body d-flex flex-column"> {/* Flex column to ensure content alignment */}
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.desc}</p>
                                    <div className="mt-auto"> {/* Push button to the bottom */}
                                        <a href={project.project_link} className="btn btn-primary">View the source code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
