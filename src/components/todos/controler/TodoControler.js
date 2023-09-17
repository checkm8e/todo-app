import { useContext, useState } from "react";
import styles from "./TodoControler.module.css";
import { TodoContext } from "../../../context/Todo-context";
import { DarkModeContext } from "../../../context/Dark-context";

const TodoControler = () => {
  const { listSize, setFilter, deleteCompleted } = useContext(TodoContext);
  const { darkMode } = useContext(DarkModeContext);
  const [activeBtn, setActiveBtn] = useState(1);

  const handleFilterClick = (selectedFilter, btn) => {
    setFilter(selectedFilter);
    setActiveBtn(btn);
  };

  return (
    <div className={`${styles.wrapper} ${darkMode ? styles["dark-mode"] : ""}`}>
      <button
        className={`${
          !darkMode ? styles["length-light"] : styles["length-dark"]
        }`}
      >
        {listSize} items left
      </button>

      <div className={styles["main-controler"]}>
        <button
          key="1"
          onClick={() => handleFilterClick("all", 1)}
          className={`${
            !darkMode ? styles["button-light"] : styles["button-dark"]
          } ${activeBtn === 1 ? `${styles.active}` : ""}`}
        >
          All
        </button>
        <button
          key="2"
          onClick={() => handleFilterClick("active", 2)}
          className={`${
            !darkMode ? styles["button-light"] : styles["button-dark"]
          } ${activeBtn === 2 ? `${styles.active}` : ""}`}
        >
          Active
        </button>
        <button
          key="3"
          onClick={() => handleFilterClick("completed", 3)}
          className={`${
            !darkMode ? styles["button-light"] : styles["button-dark"]
          } ${activeBtn === 3 ? `${styles.active}` : ""}`}
        >
          Completed
        </button>
      </div>

      <button
        className={`${
          !darkMode ? styles["clear-button-light"] : styles["clear-button-dark"]
        }`}
        onClick={deleteCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default TodoControler;
