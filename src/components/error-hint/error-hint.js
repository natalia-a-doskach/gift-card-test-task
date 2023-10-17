import styles from "./error-hint.module.css";

function ErrorHint({ errors }) {
  return (
    <div>
      {errors.map((error, ind) => (
        <p className={styles.text} key={ind}>
          ! {error}
        </p>
      ))}
    </div>
  );
}

export default ErrorHint;
