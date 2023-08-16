import { useContext } from "react";
import styles from "./TodoControler.module.css";
import { TodoContext } from "../../../context/Todo-context";

const TodoControler = () => {
  const { listSize } = useContext(TodoContext);

  return (
    <div className={styles.wrapper}>
      <button className={styles.length}>{listSize} items left</button>

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
