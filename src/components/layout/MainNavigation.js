import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.scss';
import { HiOutlineSearch, HiOutlineShoppingBag } from 'react-icons/hi';

const MainNavigation = () => {
  return (
    <nav className={classes.nav}>
      <Link to="/" className={classes.icon}>
        Ecommerce
      </Link>
      <div className={classes.links}>
        <Link to="Shop">Shop</Link>
        <Link to="Stories">Stories</Link>
        <Link to="#">About</Link>
      </div>
      <div className={classes.search}>
        <HiOutlineSearch />
        <input type="text" className={classes.searchbar} placeholder="Search" />
      </div>
      <div className={classes.rightnav}>
        <HiOutlineShoppingBag />
        <p className={classes.items}>3</p>
        <Link to="#">Login</Link>
      </div>
    </nav>
  );
};

export default MainNavigation;
