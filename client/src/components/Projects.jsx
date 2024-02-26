import React from "react";
import { projectdata } from "../Data";

function Projects() {
    return (
        <section id="projectspage">
            <div className="container">
                <div className="col-12  order-md-1">
                <h1 className="text-center" style={{ color: 'white', fontFamily: "Lucida Console", fontSize: "1.5rem", fontStyle: "oblique",padding: "20px"}}>Projects</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    {projectdata.map((props) => (
                        <div key={props.id} className="col mb-4">
                            <div className="card h-100"> {/* Added h-100 class to make sure all cards have the same height */}
                                <img src={props.image} className="card-img-top img-fluid" alt={props.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{props.title}</h5>
                                    <p className="card-text">{props.desc}</p>
                                    <a href={props.project_link} className="btn btn-primary">View the source code</a>
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
