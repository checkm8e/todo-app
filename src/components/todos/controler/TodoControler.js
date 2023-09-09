import { useContext, useState } from "react";
import styles from "./TodoControler.module.css";
import { TodoContext } from "../../../context/Todo-context";

const TodoControler = () => {
  const { listSize, setFilter, deleteCompleted } = useContext(TodoContext);
  const [activeBtn, setActiveBtn] = useState("1");

  const handleFilterClick = (selectedFilter, btn) => {
    setFilter(selectedFilter);
    setActiveBtn(btn);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.length}>{listSize} items left</button>

      <div className={styles["main-controler"]}>
        <button
          key="1"
          onClick={() => handleFilterClick("all", 1)}
          className={activeBtn === 1 ? `${styles.active}` : ""}
        >
          All
        </button>
        <button
          key="2"
          onClick={() => handleFilterClick("active", 2)}
          className={activeBtn === 2 ? `${styles.active}` : ""}
        >
          Active
        </button>
        <button
          key="3"
          onClick={() => handleFilterClick("completed", 3)}
          className={activeBtn === 3 ? `${styles.active}` : ""}
        >
          Completed
        </button>
      </div>

      <button className={styles["clear-button"]} onClick={deleteCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoControler;
