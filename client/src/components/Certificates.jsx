import React from "react";
import { certificatedata } from "../Data";

function Certificates() {
    return (
        <section id="Certificatespage" className="vh-100">
            <div className="container">
                <div className="col-12 order-md-1">
                    <i class="fa-brands fa-html5 p-2"></i>
                    <h1 className="text-center" style={{ color: 'white', fontFamily: "Lucida Console", fontSize: "1.5rem", fontStyle: "oblique", padding: "20px" }}>Certifications</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    {certificatedata.map((props) => (
                        <div key={props.id} className="col mb-4">
                            <div className="card h-100">
                                <img src={props.image} className="card-img-top img-fluid" style={{ height: "200px", objectFit: "cover" }} alt={props.title} /> {/* Added style to set fixed height for the image */}
                                <div className="card-body">
                                    <h5 className="card-title">{props.title}</h5>
                                    <p className="card-text" style={{ maxHeight: "100px", overflow: "hidden" }}>{props.desc}</p> {/* Added style to limit the height and hide overflow */}
                                    <a href={props.certificate_link} className="btn btn-primary">View</a>
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
