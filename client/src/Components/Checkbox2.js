export default function Checkbox2({ isChecked, checkHandler, index, kanji }) {
    return (
        <div>
            <input type="checkbox" id={`checkbox-${index}`} checked={isChecked} onChange={checkHandler} />
            <label htmlFor={`checkbox-${index}`}>
                {kanji.character} : Kunyomi- {kanji.kunyomi} - {kanji.romaji1} ... Onyomi- {kanji.onyomi} -{kanji.romaji2}
                ... Meaning- {kanji.meaning}
            </label>
        </div>
    );
}
