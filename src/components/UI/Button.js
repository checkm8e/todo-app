import { useContext } from "react";
import { DarkModeContext } from "../../context/Dark-context";
import style from "./Button.module.css";

const Button = (props) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={style.container}>
      <input
        type="button"
        className={`${style.button} ${
          !darkMode ? style["button-light"] : style["button-dark"]
        } ${props.newStyle}`}
        onClick={props.buttonClick}
      />
    </div>
  );
};

export default Button;
