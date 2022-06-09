import { Link } from "react-router-dom"
import React, { useState } from 'react';
import { getProducts } from "../data/Products";

export const Products = () => {

  const [products] = useState(getProducts());

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4" style={{margin: "0 auto", maxWidth: "900px"}}>
      {products.map((item, key) => (
        <div key={key} className="col">
        <div className="card text-center">
        <img src={item.photo} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Стоимость: {item.price} тенге</li>
          <li className="list-group-item">Объем: {item.weight} {item.metrics}.</li>
          <li className="list-group-item">Производство: {item.manufacturer}</li>
          <li className="list-group-item">Дата производства: {item.date}</li>
        </ul>
        <div className="card-body">
          <Link to={"./"+item.id} className="card-link">Подробнее...</Link>
        </div>
      </div>
      </div>
      )
      )}
    </div>
  )
}