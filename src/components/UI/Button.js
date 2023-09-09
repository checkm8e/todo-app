import style from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={style.container}>
      <input
        type="button"
        className={`${style.button} ${props.newStyle}`}
        onClick={props.buttonClick}
      />
    </div>
  );
};

export default Button;
