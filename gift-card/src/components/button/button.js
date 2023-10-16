import styles from "./button.module.css";

function Button({text,onClick, style}) {
  return (
    <div onClick={onClick} className={`${style}`}>
      <p className={`${styles.text}`}>{text}</p>
    </div>
  );
}

export default Button;
