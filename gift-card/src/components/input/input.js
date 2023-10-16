import styles from "./input.module.css";

function Input({ type, placeholder, onChange, value, name, error, errorText }) {
  return (
    <div >
      <input
        className={styles.text}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        error={error}
        errorText={errorText}
      />
    </div>
  );
}

export default Input;
