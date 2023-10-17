import styles from "./input.module.css";

function Input({ type, placeholder, onChange, value, name }) {
  return (
    <div>
      <input
        className={styles.text}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
}

export default Input;
