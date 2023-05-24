import axios from "axios";
import { useState, useEffect } from "react";
import "../Mykanji.css"

const dummyData = {email:"rachael@email", mykanji: [{
    character: "書",
    video: "https://media.kanjialive.com/kanji_animations/kanji_mp4/sho-ka(ku)_00.mp4",
    grade: 2,
    meaning: "write, book",
    kunyomi: "か",
    romaji1: "ka, kaku",
    onyomi: "ショ",
    romaji2: "sho",
    hint: "Using a writing brush 聿 <span class='note'>(holding [38] brush 丨 with fingers 二)</span> in a sunlit 日 place.",
},
{
    character: "秋",
    video: "https://media.kanjialive.com/kanji_animations/kanji_mp4/aki_00.mp4",
    grade: 2,
    meaning: "autumn",
    kunyomi: "あき",
    romaji1: "aki",
    onyomi: "シュウ",
    romaji2: "shuu",
    hint: "In fall, fire 火 can be made where the crops 禾 grew.",
},]}

export default function Mykanji({logInEmail}) {
    const [myKanji, setMyKanji] = useState([]);
    const [video, setVideo] = useState(false)

    useEffect(() => {
      getMyKanji()
    }, [logInEmail])
    

    async function getMyKanji() {
        console.log(logInEmail)
        const API = `http://localhost:8077/mykanji/?email=${logInEmail}`;
        const res = await axios.get(API);
        console.log(res.data);
        setMyKanji(res.data.mykanji);
    }

    async function deleteKanji(id) {
        const API = `http://localhost:8077/mykanji/${id}`;
        await axios.delete(API);
        getMyKanji();
    }

    function handleStrokeVideo(){
        setVideo(!video)
    }

    return (
        <div className="sub-heading">
            <h2>My Kanji: {logInEmail}</h2>
            <button style={{ marginLeft: "210px", marginTop: "1.5rem" }} onClick={getMyKanji}>
                    Get My Kanji
                </button>
            <div className="card-display-space">
                {myKanji && myKanji.map((kanji, index) => {
                return ( 
                <div className="card" key={index}>
                    {video ? 
                    (<video width="250" height="300" autoplay>
                                    <source src={kanji.video}/>
                                </video> )
                    : (<h3 >{kanji.character}</h3>)}
                    
                    <button onClick={()=>handleStrokeVideo()}>See Stroke Order</button>
                    <p>Meaning- {kanji.meaning}</p>
                    <p>Kunyomi- {kanji.kunyomi}</p>
                    <p>Romaji- {kanji.romaji1}</p>
                    <p>Onyomi- {kanji.onyomi}</p>
                    <p>Romaji- {kanji.romaji2}</p>
                    <button onClick={()=>deleteKanji()}>
                        Remove
                    </button>

                </div>)})}
            </div>
        </div>
    );
}
