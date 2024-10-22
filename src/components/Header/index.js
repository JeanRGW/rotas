import { Link } from "react-router-dom"

import "./../../App.css"

const Header = () =>
    <header>
        <h2>Jean</h2>

        <div>
            <Link to='/'>Home</Link>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/contato'>Contato</Link>
            <Link to='/produto/tadala'>Produto</Link>
        </div>
    </header>
    
export default Header;