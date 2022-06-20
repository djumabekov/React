import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <h1>Sticky Header Pow!</h1>
            <nav>
                <Link to="/">Панель управления ПК</Link>
                <Link to="/monitor">Монитор состояния ПК</Link>
            </nav>
        </header>
    )
}