import classes from './ProductMini.module.scss';

const ProductMini = (props) => {
  return (
    <div className={classes.product}>
      <div className={classes.image}>
        <img src={props.image} width="100%" height="auto" alt="cloth" />
      </div>
      <h2>{props.name}</h2>
      <p> ${props.price}</p>
    </div>
  );
};

export default ProductMini;
