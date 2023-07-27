import styles from "./TodoControler.module.css";

const TodoControler = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.length}>5 items left</button>

      <div className={styles["main-controler"]}>
        <button className={styles.active}>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>

      <button className={styles["clear-button"]}>Clear Completed</button>
    </div>
  );
};

export default TodoControler;
