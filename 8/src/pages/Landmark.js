import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import { getDataById } from "../data/data";

export const Landmark = () => {
    const params = useParams();

    const id = params.id ? params.id : 1;
    console.log("id = " + id);
    const [data] = useState(getDataById(id));

    return (
        <div className="wrapper">
            <section id='steezy'>

                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={data.photo} className="img-fluid rounded-start" alt="Байтерек" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{data.title}</h5>
                                <p className="card-text">{data.description.map((desc)=>(
                                        <p className="card-text">{desc}</p>
                                ))}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>             
            </section>
        </div>
    )
}