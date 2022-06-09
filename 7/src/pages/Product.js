import {Link,   useParams } from "react-router-dom"
import React, { useState } from 'react';
import { getProduct } from "../data/Products";

export const Product = () => {

  const params = useParams();

  const [product] = useState(getProduct(params.id));

  return (
      
    // <div className="row row-cols-1 row-cols-md-3 g-4" style={{margin: "30px", maxWidth: "1000px"}}>
    <div className="col" style={{margin: "0 auto", maxWidth: "400px"}}>
    <div className="card text-center">
    <img src={product.photo} className="card-img-top" alt={product.name} />
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">{product.description}</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Стоимость: {product.price} тенге</li>
      <li className="list-group-item">Объем: {product.weight} {product.metrics}.</li>
      <li className="list-group-item">Производство: {product.manufacturer}</li>
      <li className="list-group-item">Дата производства: {product.date}</li>
    </ul>
    <div className="card-body">
      <Link to="../products" className="card-link">Вернуться к продуктам...</Link>
    </div>
  </div>
  </div>
// </div>
  )
}