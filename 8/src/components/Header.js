import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header style={{color: "white", marginBottom: "30px"}}>
            <nav className="nav justify-content-center align-items-center navbar navbar-dark bg-dark" >
                <Link to="main" className="nav-link active text-white" aria-current="page" >Главная</Link>
                <Link to="info" className="nav-link text-white">Информация</Link>
                <Link to="landmark" className="nav-link text-white" >Известная достопримечательность</Link>
                <Link to="otherlandmarks" className="nav-link text-white" >Другие достопримечательности</Link>
                <Link to="photos" className="nav-link text-white" >Фотографии</Link>
                <Link to="userpage" className="nav-link text-white" >Личный кабинет</Link>
            </nav>
        </header>
    )
}