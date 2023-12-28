import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
  return (
    // Dynamicly adding class by type
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
