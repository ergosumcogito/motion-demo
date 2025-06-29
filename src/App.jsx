import {Route, Routes} from "react-router-dom";
import PageTwo from "./pages/PageTwo.jsx";
import PageOne from "./pages/PageOne.jsx";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
    return (
        <div>
            <NavBar />
            <main style={{ padding: '0 20px' }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page-one" element={<PageOne />} />
                <Route path="/page-two" element={<PageTwo />} />
            </Routes>
            </main>
        </div>
    )
}

export default App
