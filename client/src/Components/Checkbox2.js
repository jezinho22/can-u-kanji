export default function Checkbox({ isChecked, label, checkHandler, index }) {
    return (
        <div>
            <input type="checkbox" id={`checkbox-${index}`} checked={isChecked} onChange={checkHandler} />
            <label htmlFor={`checkbox-${index}`}>{label}</label>
        </div>
    );
}
