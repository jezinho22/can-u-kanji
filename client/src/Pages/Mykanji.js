import axios from "axios";
import { useState } from "react";

export default function Mykanji({ email }) {
    const [myKanji, setMyKanji] = useState({});

    async function getMyKanji() {
        const API = `http://localhost:8077/mykanji/${email}`;
        const res = await axios.get(API);
        setMyKanji(res.data);
    }

    async function deleteKanji(id) {
        const API = `http://localhost:8077/mykanji/${id}`;
        await axios.delete(API);
        getMyKanji();
    }

    return (
        <div className="sub-heading">
            <h2>Mykanji</h2>
        </div>
    );
}
