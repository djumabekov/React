import { Link } from "react-router-dom"
import { SearchInput } from "./SearchInput";

export const Header = () => {
    return (
        <header>
            <nav className="navbar-dark bg-dark nav justify-content-center align-items-center">
                <Link to="main" className="nav-link active" aria-current="page" >Главная</Link>
                <Link to="products" className="nav-link">Продукты</Link>
                <Link to="delivery" className="nav-link" >Доставка</Link>
                <Link to="contacts" className="nav-link" >Контакты</Link>
                <Link to="about" className="nav-link" >О нас</Link>
                <Link to="support" className="nav-link" >Поддержка</Link>
                <SearchInput/>
            </nav>
            
        </header>
    )
}