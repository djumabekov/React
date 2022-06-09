import {Link } from "react-router-dom"
import React, { useState } from 'react';


export const SearchInput = () => {

const [name, setValue] = useState('');
const [active, setActive] = useState('nav-link disabled');

const inputHandler = (e) => {
    setValue(e.target.value);
    if(e.target.value.length >= 3){
        setActive('');
    } else{
        setActive('nav-link disabled');
    }
}

  return (
      
    <form className="d-flex" role="search" >
    <input onChange={e=>inputHandler(e)} className="form-control me-2" type="search" placeholder="Найти..." aria-label="Search" style={{marginLeft: "20px"}}/>
    <Link to={"../search?name="+name.trim()}  className={"btn btn-outline-success " + active } type="submit">Найти</Link>
  </form>
  )
}