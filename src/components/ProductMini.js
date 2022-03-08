import classes from './ProductMini.module.scss';
import { Link } from 'react-router-dom';

const ProductMini = (props) => {
  return (
    <div className={classes.product}>
      <Link to={props.id}>
        <div className={classes.image}>
          <img
            src={`${process.env.PUBLIC_URL}/images/${props.image}.jpg`}
            width="100%"
            height="auto"
            alt="cloth"
          />
        </div>
        <h2>{props.name}</h2>
        <p> ${props.price}</p>
      </Link>
    </div>
  );
};

//<Link to={`${props.id}`}>

export default ProductMini;
