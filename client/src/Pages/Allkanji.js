import Dropdown from "react-dropdown"


export default function Allkanji() {
    const options = ["Grade 1", "Grade 2"]
    const defaultOption = options[0]
    
function handleSelect(event){
    console.log("handleseelect firing")
console.log(event.value)
}

    return (
    <div>   <h2>All Kanji</h2><Dropdown options={options} 
                    onChange={handleSelect} 
                    placeholder="Select grade" 
                    value={defaultOption}/>
 
    </div>
    )
}
