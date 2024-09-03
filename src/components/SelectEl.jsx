import "./styles/InputCon.css";

const SelectEl = ({ label, name, options, value, onChange }) => {
  return (
    <div className="select-element">
      <label>{label}</label>
      <select name={name} id={name} value={value} onChange={onChange} required>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectEl;
