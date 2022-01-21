import classes from './ProductDetail.module.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';

const ProductDetail = () => {
  const { id } = useParams();

  function getProduct(id) {
    return products.find((product) => products.id === id);
  }

  let product = getProduct(parseInt(id));

  return (
    <div className={classes.product_detail}>
      <div className={classes.left}>
        <img
          src={product.image}
          width="100%"
          height="auto"
          alt="{product.title}"
        />
      </div>
      <div className={classes.right}>
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        <p>{product.description} </p>
      </div>
    </div>
  );
};

export default ProductDetail;
