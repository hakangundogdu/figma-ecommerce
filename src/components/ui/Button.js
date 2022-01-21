import classes from './Button.module.scss';

const Button = (props) => {
  return <button className={classes.button}>{props.name}</button>;
};

export default Button;
