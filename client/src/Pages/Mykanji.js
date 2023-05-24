import axios from "axios";
import { useState } from "react";

export default function Mykanji({ email }) {
    const [myKanji, setMyKanji] = useState({});

    async function getMyKanji() {
        console.log(myKanji)
        const API = `https://can-u-kanji.onrender.com/mykanji/${email}`;
        const res = await axios.get(API);
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
            <button onClick={deleteKanji}>This is not really the button</button>
        </div>
    );
}
