import Dropdown from "react-dropdown";
import Checkbox2 from "../Components/Checkbox2";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Allkanji({logInEmail }) {
    const options = ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"];
    const defaultOption = "Select grade";
    const [myKanji, setMyKanji] = useState([]);
    const [grade, setGrade] = useState("");
    const [savedData, setSavedData] = useState("")

    // take selection from dropdown
    function handleSelect(event) {
        if (event.value !== defaultOption) {
            const gradeNumber = event.value.slice(-1);
            setGrade(gradeNumber);
        }
    }

    // when grade changes fetch kanji that match from API
    useEffect(() => {
        if (grade) {
            getKanji();
        }
    }, [grade]);

    // fetch kanji
    async function getKanji() {
        const url = `https://can-u-kanji.onrender.com/kanji/${grade}`;
        const res = await axios.get(url);
        console.log(res.data.length);
        const results = res.data;
        // add checked : false to all kanji, for checkboxes
        results.map((kanji) => ({ ...kanji, checked: false }));
        setMyKanji(res.data);
    }

    function selectAll() {
        setMyKanji(myKanji.map((kanji) => ({ ...kanji, checked: true })));
    }

    function unSelectAll() {
        setMyKanji(myKanji.map((kanji) => ({ ...kanji, checked: false })));
    }

    // deal with clicks on the checkboxes
    function updateCheckStatus(index) {
        setMyKanji(
            myKanji.map((kanji, currentIndex) => {
                if (currentIndex === index) {
                    return { ...kanji, checked: !kanji.checked };
                } else {
                    return kanji;
                }
            })
        );
    }

    async function handleSubmit() {
        // filter to get checked kanji only
        if (logInEmail){
        const myCheckedKanji = myKanji.filter((kanji) => kanji.checked === true);
        // construct data object to send to server
        const body = { email: logInEmail, mykanji: myCheckedKanji };
        // post
        const url = `https://can-u-kanji.onrender.com/kanji/`;
        await axios.post(url, body);
        setSavedData(`You have saved ${body.mykanji.length} under the email address: ${logInEmail}`)
        } else {
            alert("You need to log in before you can save")
        }
    }

    return (
        <div>
            <h2 className="sub-heading">All Kanji</h2>

            <Dropdown options={options} onChange={handleSelect} value={defaultOption} />
            
            {myKanji.length > 0 && (
                <div className="button-container">
                    <button onClick={selectAll}>Select All</button>
                    <button onClick={unSelectAll}>Unselect All</button>
                    <button className="submitButton" onClick={handleSubmit}>
                        Save choices
                    </button>
                    <p>{savedData}</p>
                </div>
            )}
            <div className="kanji">
                {myKanji &&
                    myKanji.map((kanji, index) => (
                        <Checkbox2
                            key={index}
                            isChecked={kanji.checked}
                            checkHandler={() => updateCheckStatus(index)}
                            label={kanji.name}
                            index={index}
                            kanji={kanji}
                        />
                    ))}
            </div>

        </div>
    );
}
