import { Link } from "react-router-dom";
import homeIcon from "./casa.png"
import './index.css';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <img className="navbar__logo"
                    src={homeIcon}
                    alt="Website logo"
                />
                <ul className="navbar__items">
                    <li className="navbar__list">
                        <Link to="/" className="navbar__link">
                            Home
                        </Link>
                    </li>
                    <li className="navbar__list">
                        <Link to="/about" className="navbar__link">
                            About
                        </Link>
                    </li>
                    <li className="navbar__list">
                        <Link to="/donate" className="navbar__link">
                            Donate
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;