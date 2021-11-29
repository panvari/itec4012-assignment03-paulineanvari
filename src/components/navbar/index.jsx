import "./styles.css"
import { 
    NavLink 
} from "react-router-dom";
import { RiPlantFill } from 'react-icons/ri';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                <RiPlantFill className="shop-icon" style={{fontSize: "35px"}} />
                </li>
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/">Pauline's Plant Shop</NavLink>
                </li>
            </ul>
        </nav>
    )
}