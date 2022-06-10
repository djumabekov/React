import React, { useState } from 'react';
import { getAllData } from "../data/data";


export const Photos = () => {
    const [data] = useState(getAllData());

    return (
        <div className="text-center" style={{ display: "inline-flex"}}>
        {data.map((item, key)=>(
            <img src={item.photo} className="rounded mx-auto d-block"  alt="..." style={{ width: "30%", marginLeft: "30px"}}/>

        ))}
        </div>
    )
}