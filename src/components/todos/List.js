import styles from "./List.module.css";

const List = (props) => {
  return (
    <ul className={styles.list}>
      {localStorage.length === 0 ? (
        <li className={styles.empty}>List is empty.</li>
      ) : (
        ""
      )}
    </ul>
  );
};

export default List;
