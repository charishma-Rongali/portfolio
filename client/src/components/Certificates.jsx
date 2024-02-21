import React from "react";

import {certificatedata} from "../Data";
function Certificates() {
    return (
        <section id="Certificatespage" className="vh-100">
        <div className="container">
            <div className="d-flex flex-wrap justify-content-between">
                {certificatedata.map((props) => (
                    <div   key={props.id} className="card width-18  col-12 col-md-4  col-lg-3 order-md-2 ml-auto d-flex align-items-center justify-content-center ">
                        <img src={props.image} className="card-img-top img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate px-12" alt={props.title} />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.desc}</p>
                            <a href={props.certificate_link} className="btn btn-primary">URL</a>
                        </div>
                    </div>)
                )}
            </div>
        </div>
        </section>
    );
}
export default Certificates;