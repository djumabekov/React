import React, { useState } from 'react';
import { getAllData } from "../data/data";

export const OtherLandmarks = () => {
    const [data] = useState(getAllData());

    return (
        <div className="wrapper">
            <section id='steezy'>
            {data.map((item, key) => (
                <div key ={key} className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={item.photo} className="img-fluid rounded-start" alt="Байтерек" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description.map((desc)=>(
                                        <p className="card-text">{desc}</p>
                                ))}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>             
                )
                )} </section>
        </div>
    )
}