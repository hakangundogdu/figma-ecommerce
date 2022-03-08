import classes from './ProductDetail.module.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  console.log(useParams());
  function getProduct(id) {
    return products.find((product) => product.id === id);
  }

  let product = getProduct(id);
  console.log(product);

  return (
    <div className={classes.product_detail}>
      <div className={classes.left}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${product.image}.jpg`}
          width="80%"
          height="auto"
          alt="productimage"
        />
      </div>
      <div className={classes.right}>
        <h1>{product.title}</h1>
        <h3>${product.price}</h3>
        <p>{product.description} </p>
      </div>
    </div>
  );
};

export default ProductDetail;
