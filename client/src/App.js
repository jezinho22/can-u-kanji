import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Allkanji from "./Pages/Allkanji";
import Mykanji from "./Pages/Mykanji";
import Pairgame from "./Pages/Pairgame";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/allkanji" element={<Allkanji />} />
                    <Route path="/mykanji" element={<Mykanji />} />
                    <Route path="/pairgame" element={<Pairgame />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
