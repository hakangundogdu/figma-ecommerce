import classes from './Button.module.scss';

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type="button"
      autoFocus={props.autoFocus}
    >
      {props.name}
    </button>
  );
};

export default Button;
