import styles from "./subheader.module.css";

function Subheader(props) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{props.children}</p>
    </div>
  );
}

export default Subheader;
