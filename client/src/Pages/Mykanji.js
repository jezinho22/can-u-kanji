import axios from "axios";
import { useState } from "react";

export default function Mykanji() {
    const [myKanji, setMyKanji] = useState({});
    const [email, setEmail] = useState("jez.johns@email");

    async function getMyKanji() {
        console.log(myKanji);
        const API = `https://can-u-kanji.onrender.com/mykanji/?email=${email}`;
        const res = await axios.get(API);
        console.log(res.data);
        setMyKanji(res.data);
    }

    async function deleteKanji(id) {
        const API = `https://can-u-kanji.onrender.com/mykanji/${id}`;
        await axios.delete(API);
        getMyKanji();
    }

    return (
        <div className="sub-heading">
            <h2>Mykanji</h2>
            <div className="card">
                <h3 style={{ fontSize: "4rem" }}>日</h3>
                <button>See Stroke Order</button>
                <p>Meaning- day; sun</p>
                <p>Kunyomi- 　に,　にち</p>
                <p>Onyomi- び,　ひ,　か</p>
                <button style={{ marginLeft: "210px", marginTop: "1.5rem" }} onClick={deleteKanji}>
                    Remove
                </button>
                <button style={{ marginLeft: "210px", marginTop: "1.5rem" }} onClick={getMyKanji}>
                    Get My Kanji
                </button>
            </div>
        </div>
    );
}
