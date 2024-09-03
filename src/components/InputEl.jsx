import "./styles/InputCon.css";

const InputEl = ({ label, type, name, value, onChange }) => {
  return (
    <div className="input-element">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        required
      />
    </div>
  );
};

export default InputEl;
