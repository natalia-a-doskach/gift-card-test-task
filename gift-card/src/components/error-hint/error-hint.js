import styles from "./error-hint.module.css";

function ErrorHint({errors}) {
  return (
    <div >
      {errors.map(error=>
      <p className={styles.text}>! {error}</p>)}
    </div>
  );
}

export default ErrorHint;
