import ProductMini from '../components/ProductMini';
import classes from './Shop.module.scss';
import products from '../data/products.json';
import Button from '../components/ui/Button';
import { HiChevronDown } from 'react-icons/hi';

const Shop = () => {
  const productList = products.map((item) => (
    <ProductMini
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
      <div className={classes.filter_container}>
        <div className={classes.button_container}>
          <Button autoFocus="true" name="Sweaters" />
          <Button name="Tops" />
          <Button name="Jackets" />
          <Button name="Hats" />
        </div>
        <div className={classes.filter}>
          <p className={classes.text_gray}>Sort by</p>
          <strong>
            <p>Popular</p>
          </strong>
          <HiChevronDown />
        </div>
      </div>
      <div className={classes.right_aligned}>Showing 1003 Products</div>

      <div className={classes.products}>{productList}</div>
    </>
  );
};

export default Shop;
