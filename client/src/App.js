import "./css/reset.css";
import "./css/App.css"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Allkanji from "./Pages/Allkanji";
import Mykanji from "./Pages/Mykanji";
import Pairgame from "./Pages/Pairgame";
import { useState, useEffect } from "react";

function App() {
    const [email, setEmail] = useState("");
    const [logInEmail, setLogInEmail]=useState("")

    useEffect(() => {
        checkLoggedIn()

    }, [])

    function checkLoggedIn(){
        if (localStorage.getItem("logIn")){
            const stored = localStorage.getItem("logIn")
            setLogInEmail(stored)}
            else{
                setLogInEmail("")
            }

    }

    function handleChangeEmail(event) {
        setEmail(event.target.value);
    }

    function logIn(){
        console.log("just ran the login!")
        localStorage.setItem("logIn", email)
        setLogInEmail(email)
    }
    function logOut(){
        console.log("just ran log out!")
        localStorage.setItem("logIn","")

        setLogInEmail("")
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Header logInEmail={logInEmail} logIn={logIn} logOut={logOut} handleChangeEmail={handleChangeEmail}/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/allkanji" element={<Allkanji logInEmail={logInEmail}/>} />
                    <Route path="/mykanji" element={<Mykanji logInEmail={logInEmail} />} />
                    <Route path="/pairgame" element={<Pairgame />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
