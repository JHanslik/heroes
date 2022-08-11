import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Header from "./components/Header";
import AddHero from "./pages/AddHero";
import Hero from "./pages/Hero";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddHero />} />
                <Route path="/:slug" element={<Hero />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
