import "./reset.css";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Allkanji from "./Pages/Allkanji";
import Mykanji from "./Pages/Mykanji";
import Pairgame from "./Pages/Pairgame";
import { useState } from "react";


function App() {

const [email, setEmail] = useState("")
    function handleChangeEmail(event){
        setEmail(event.target.value)
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/allkanji" element={<Allkanji email={email} handleChangeEmail={handleChangeEmail}/>} />
                    <Route path="/mykanji" element={<Mykanji />} />
                    <Route path="/pairgame" element={<Pairgame />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
