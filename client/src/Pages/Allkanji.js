import Dropdown from "react-dropdown";
import Checkbox2 from "../Components/Checkbox2";
import { useState, useEffect } from "react";
import axios from "axios";

const allToppings = [
    { name: "Golden Corn", checked: false },
    { name: "Paneer", checked: false },
    { name: "Tomato", checked: false },
    { name: "Mushroom", checked: false },
    { name: "Onion", checked: false },
    { name: "Black Olives", checked: false },
];

export default function Allkanji() {
    const options = ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"];
    const defaultOption = options[0];
    const [toppings, setToppings] = useState(allToppings);
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
        console.log(url);
        const res = await axios.get(url);
        console.log(res.data.length);
    }

    function selectAll() {
        setToppings(toppings.map((topping) => ({ ...topping, checked: true })));
    }

    function unSelectAll() {
        setToppings(toppings.map((topping) => ({ ...topping, checked: false })));
    }

    function updateCheckStatus(index) {
        setToppings(
            toppings.map((topping, currentIndex) =>
                currentIndex === index ? { ...topping, checked: !topping.checked } : topping
            )
        );
    }

    return (
        <div>
            <h2>All Kanji</h2>

            <Dropdown options={options} onChange={handleSelect} placeholder="Select grade" value={defaultOption} />
            <button onClick={selectAll}>Select All</button>
            <button onClick={unSelectAll}>Unselect All</button>

            {toppings.map((topping, index) => (
                <Checkbox2
                    key={topping.name}
                    isChecked={topping.checked}
                    checkHandler={() => updateCheckStatus(index)}
                    label={topping.name}
                    index={index}
                />
            ))}
            {/* <p>
                <pre>{JSON.stringify(toppings, null, 2)}</pre>
            </p> */}
        </div>
    );
}
