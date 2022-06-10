import { Link } from "react-router-dom"
import React, { useState } from 'react';
import { getAllData } from "../data/data";

export const Main = () => {

    const [data] = useState(getAllData());
    const [id, setId] = useState(1);

    const selectHandler = (e) => {
        setId(e.target.value);
    }
    return (
        <div className="wrapper">
            <section id='steezy'>
                <h2> Главная </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ut aspernatur omnis neque iusto. Veritatis rem ad atque optio perferendis. Dolorum qui consequatur, repellat soluta impedit porro totam molestiae sit.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus iusto, omnis quas, rem minus cupiditate, sunt voluptates minima sint nemo ipsa itaque consequatur dolor, quam necessitatibus vitae. Quod, eaque, quam.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum!</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim sunt delectus, reiciendis omnis laudantium animi, et nulla quidem, aliquam aliquid. A consectetur deleniti voluptates eius neque, voluptate voluptatibus nostrum!</p>

                <Link to="../info" className="card-link">Информация о городе</Link>

                <Link to="../landmark" className="card-link">Самая известная достопримечательность</Link>

                <Link to="../otherlandmarks" className="card-link">Другие достопримечательности</Link>

                <Link to="../photos" className="card-link">Фотографии</Link>

                
                <div class="input-group" style={{marginTop: "30px", width: "50%"}}>
                    <select onChange={e=>selectHandler(e)} class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" >
                    {data.map((item, key) => (
                        <option key={key} value={item.id} label={item.title} />
                        ))}
                    </select>
                    <Link to={"../landmark/" +id} class="btn btn-outline-secondary" type="button">Показать...</Link>
                </div>
            </section>
        </div>
    )
}