import styles from "./Heading.module.css";

const Heading = () => {
  return (
    <div className={styles["heading-container"]}>
      <h1>TODO</h1>
      <button className={styles.btn}></button>
    </div>
  );
};

export default Heading;
