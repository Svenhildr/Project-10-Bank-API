import logo from "../assets/argentBankLogo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="./">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <Link className="main-nav-item" to="/sign-in">
                    <i className="fa fa-user-circle"> </i>
                    Sign In
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
