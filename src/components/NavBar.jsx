import { Link } from "react-router-dom";
import homeIcon from '../assets/home.svg'

export default function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src={homeIcon} alt="Home" width={30} style={{ verticalAlign: "middle", margin: "10px" }} />
            </Link>
            <Link to="/page-one" style={{color: "white", margin: "10px", textDecoration: "none" }}>Page 1</Link>
            <Link to="/page-two" style={{color: "white", margin: "10px", textDecoration: "none"}}>Page 2</Link>
        </nav>
    );
}
