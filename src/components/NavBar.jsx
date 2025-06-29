import { Link } from "react-router-dom";
import homeIcon from '../assets/home.svg'

export default function NavBar() {
    return (
        <nav style={{
            padding: "10px",
            background: "#22004e",
            display: "flex",
            alignItems: "center",
        }}>
            <Link to="/" style={{ margin: "10px" }}>
                <img src={homeIcon} alt="Home" width={35} />
            </Link>
            <Link to="/page-one" style={{color: "white", margin: "10px" }}>Page 1</Link>
            <Link to="/page-two" style={{color: "white", margin: "10px" }}>Page 2</Link>
        </nav>
    );
}
