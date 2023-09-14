import { useContext } from "react";
import styles from "./Heading.module.css";
import { DarkModeContext } from "../../context/Dark-context";

const Heading = () => {
  const { darkMode, displayMode } = useContext(DarkModeContext);

  return (
    <div className={styles["heading-container"]}>
      <h1>TODO</h1>
      <button
        className={`${styles.btn} ${!darkMode ? styles.light : styles.dark}`}
        onClick={displayMode}
      ></button>
    </div>
  );
};

export default Heading;
