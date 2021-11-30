import "./styles.css"
import { 
    NavLink 
} from "react-router-dom";
import { RiPlantFill } from 'react-icons/ri';

export const Navbar = () => {
    //return nav bar with icon and shop title
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    {/*define shop icon*/}
                    <RiPlantFill className="shop-icon" style={{fontSize: "35px"}} />
                </li>
                <li>
                    {/*define shop title*/}
                    <NavLink exact={true} activeClassName="nav-selected" to="/">Pauline's Plant Shop</NavLink>
                </li>
            </ul>
        </nav>
    )
}