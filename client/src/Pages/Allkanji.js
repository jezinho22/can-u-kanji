import Dropdown from "react-dropdown";
import Checkbox2 from "../Components/Checkbox2";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Allkanji({email, handleChangeEmail}) {
    const options = ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"];
    const defaultOption = "Select grade";
    const [myKanji, setMyKanji] = useState([]);
    const [grade, setGrade] = useState("");

    function handleSelect(event) {
        if (event.value !== defaultOption){
        const gradeNumber = event.value.slice(-1);
        setGrade(gradeNumber);}
    }

    useEffect(() => {
        if (grade) {
            getKanji();
        }
    }, [grade]);

    async function getKanji() {
        const url = `http://localhost:8076/kanji/${grade}`;
        const res = await axios.get(url);
        console.log(res.data.length);
        const results = res.data;
        results.map((kanji) => ({ ...kanji, checked: false }));
        setMyKanji(res.data);
    }

    function selectAll() {
        setMyKanji(myKanji.map((kanji) => ({ ...kanji, checked: true })));
    }

    function unSelectAll() {
        setMyKanji(myKanji.map((kanji) => ({ ...kanji, checked: false })));
    }

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

    async function handleSubmit(){
        console.log(myKanji.length)
        const url = `http://localhost:8076/kanji/${email}`
    }

    return (
        <div>
            <h2 className="sub-heading">All Kanji</h2>

            <Dropdown options={options} onChange={handleSelect} value={defaultOption} />
            {myKanji.length > 0 && <div className="button-container">
                <input placeholder="email address" onChange={handleChangeEmail}/>
                <button onClick={selectAll}>Select All</button>
                <button onClick={unSelectAll}>Unselect All</button>
                <button className="submitButton" onClick={handleSubmit}>Save choices</button>
                        </div>}
            <div className="kanji">
                {myKanji &&
                    myKanji.map((kanji, index) => (
                        <Checkbox2
                            key={kanji.name}
                            isChecked={kanji.checked}
                            checkHandler={() => updateCheckStatus(index)}
                            label={kanji.name}
                            index={index}
                            kanji={kanji}
                        />
                    ))}
            </div>
            {/* <p>
                <pre>{JSON.stringify(myKanji, null, 2)}</pre>
            </p> */}
        </div>
    );
}
