import ProductMini from '../components/ProductMini';
import classes from './Shop.module.scss';
import products from '../data/products.json';

const Shop = () => {
  const productList = products.map((item) => (
    <ProductMini
      id={item.id}
      key={item.id}
      name={item.title}
      image={item.image}
      price={item.price}
    />
  ));

  return (
    <>
      <header className={classes.header}>
        <h2>Shop Men's</h2>
        <p>
          Revamp your style with the latest designer trends in men’s
          <br />
          clothing or achieve a perfectly curated wardrobe thanks to
          <br />
          our line-up of timeless pieces.{' '}
        </p>
      </header>
      <div className={classes.products}>{productList}</div>
    </>
  );
};

export default Shop;
