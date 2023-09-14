import { useContext } from "react";
import { DarkModeContext } from "../../context/Dark-context";
import styles from "./BackgroundImage.module.css";

const BackgroundImage = (props) => {
  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode);

  return (
    <div
      className={`${styles.background} ${
        darkMode ? styles["dark-background"] : styles["light-background"]
      }`}
    >
      <div
        className={`${styles.image} ${!darkMode ? styles.light : styles.dark}`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default BackgroundImage;
