import { Link } from "react-router-dom";
import homeIcon from '../assets/home.svg'

export default function NavBar() {
    return (
        <nav style={{
            padding: "10px",
            background: "#22004e",
            display: "flex",
            alignItems: "center",
            fontSize: "1.5rem",
            fontFamily: "Inter",
            fontWeight: "bold",
            border: "3px solid #ffffff",
            borderRadius: "5px"
        }}>
            <Link to="/">
                <img src={homeIcon} alt="Home" width={35} style={{ verticalAlign: "middle", margin: "10px" }} />
            </Link>
            <Link to="/page-one" style={{color: "white", margin: "10px", textDecoration: "none" }}>Page 1</Link>
            <Link to="/page-two" style={{color: "white", margin: "10px", textDecoration: "none"}}>Page 2</Link>
        </nav>
    );
}
