import React from "react";
import { certificatedata } from "../Data";

function Certificates() {
    return (
        <section id="Certificatespage">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {certificatedata.map((props) => (
                        <div key={props.id} className="col mb-4">
                            <div className="card h-100">
                                <img src={props.image} className="card-img-top img-fluid" alt={props.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{props.title}</h5>
                                    <p className="card-text">{props.desc}</p>
                                    <a href={props.certificate_link} className="btn btn-primary">URL</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certificates;
