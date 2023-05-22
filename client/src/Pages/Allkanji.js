import Dropdown from "react-dropdown";
import Checkbox2 from "../Components/Checkbox2";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Allkanji() {
    const options = ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"];
    const defaultOption = options[0];
    const [myKanji, setMyKanji] = useState([]);
    const [grade, setGrade] = useState("");

    function handleSelect(event) {
        const gradeNumber = event.value.slice(-1);
        setGrade(gradeNumber);
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

    return (
        <div>
            <h2>All Kanji</h2>

            <Dropdown options={options} onChange={handleSelect} placeholder="Select grade" value={defaultOption} />
            <button onClick={selectAll}>Select All</button>
            <button onClick={unSelectAll}>Unselect All</button>

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
            {/* <p>
                <pre>{JSON.stringify(myKanji, null, 2)}</pre>
            </p> */}
        </div>
    );
}
