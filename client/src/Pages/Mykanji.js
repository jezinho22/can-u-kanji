import axios from "axios";
import { useState, useEffect } from "react";
import KanjiCard from "../Components/KanjiCard";
import "../css/Mykanji.css"


export default function Mykanji({ logInEmail }) {
    const [myKanji, setMyKanji] = useState([]);
    const [userId, setUserId] = useState("")

    // use effect to fetch user's kanji from db at start
    // and whenever logInEmail updates ie new user login
    useEffect(() => {
        getMyKanji();
    }, [logInEmail]);

    async function getMyKanji() {
        // create server call for users email
        const API = `https://can-u-kanji.onrender.com/mykanji/?email=${logInEmail}`;
        const res = await axios.get(API);
        // set myKanji as user's collection of kanji
        setMyKanji(res.data.mykanji);
        // set userId for use with delete and update
        // which is actually always update
        setUserId(res.data._id);
    }

    async function deleteKanji(id) {
        // find kanji in myKanji and remove from array
        const newMyKanji = [...myKanji];
        const index = newMyKanji.findIndex((kanji) => kanji._id === id);
        index >= 0 && newMyKanji.splice(index, 1);
        // put together new update for db
        const body = { email: logInEmail, mykanji: newMyKanji };
        // send update to db
        const API = `https://can-u-kanji.onrender.com/mykanji/${userId}`;
        const result = await axios.put(API, body);
        console.log(result)
        // update myKanji state to reflect change
        setMyKanji(newMyKanji);
    }


    function handleStrokeVideo(id){
        console.log(id)
        let newMyKanji = [...myKanji]
        newMyKanji.map((kanji)=> {
            if (kanji._id === id){
                console.log(!kanji.playVideo)
                return { ...kanji, playVideo: !kanji.playVideo
            }} else {
                return kanji
            }
        })
        setMyKanji(newMyKanji)
    }
async function updateRating(index, id){
    console.log(index, id)
            // find kanji in myKanji and remove from array
            const newMyKanji = [...myKanji];
            // does map return a new array every time?
            // do we need to use eg filter
            // need to set rating at kanjicard send to Rating
            newMyKanji.map((kanji)=> kanji._id === id ? { ...kanji, rating:index} : kanji)
            // put together new update for db
            const body = {email:logInEmail, mykanji:newMyKanji}
            console.log(body)
            // send update to db
            const API = `https://can-u-kanji.onrender.com/mykanji/${userId}`;
            const result = await axios.put(API, body);
            console.log(result)
            // update myKanji state to reflect change
            setMyKanji(newMyKanji);
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
                        <KanjiCard  key={index}
                                    kanji={kanji} 
                                    handleStrokeVideo={handleStrokeVideo} 
                                    deleteKanji={deleteKanji}
                                    updateRating={updateRating}/>
                        )})}

            </div>
        </div>
    );
}
