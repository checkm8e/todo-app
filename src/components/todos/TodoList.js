import List from "./List";
import TodoControler from "./controler/TodoControler";

import styles from "./TodoList.module.css";

const TodoList = () => {
  return (
    <div className={styles.container}>
      <List />
      <TodoControler />
    </div>
  );
};

export default TodoList;
