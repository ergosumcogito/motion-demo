import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import PageTwo from "./pages/PageTwo.jsx";
import PageOne from "./pages/PageOne.jsx";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import PageWrapper from "./components/PageWrapper.jsx";

function App() {
    const location = useLocation(); // Для корректной работы AnimatePresence
    const animationsEnabled = true;

    return (
        <div>
            <NavBar />
            <main className="content-wrapper">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route
                            path="/"
                            element={
                                <PageWrapper enabled={animationsEnabled}>
                                    <Home />
                                </PageWrapper>
                            }
                        />
                        <Route
                            path="/page-one"
                            element={
                                <PageWrapper enabled={animationsEnabled}>
                                    <PageOne />
                                </PageWrapper>
                            }
                        />
                        <Route
                            path="/page-two"
                            element={
                                <PageWrapper enabled={animationsEnabled}>
                                    <PageTwo />
                                </PageWrapper>
                            }
                        />
                    </Routes>
                </AnimatePresence>
            </main>
        </div>
    );
}

export default App;
