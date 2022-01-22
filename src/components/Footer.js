import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.left}>
        <h2>Sign up for our newsletter</h2>
        <p>
          Be the first to know about our special offers, new product <br />
          launches, and events
        </p>
        <form className={classes.form}>
          <input type="text" placeholder="Email Address" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className={classes.right}>
        <div className={classes.column}>
          <p>Shop</p>
          <ul>
            <li>Women's</li>
            <li>Men's</li>
            <li>Kid's</li>
            <li>Women's</li>
            <li>Shoes</li>
            <li>Equipment</li>
            <li>By Activity</li>
            <li>Gift Card</li>
            <li>Sale</li>
          </ul>
        </div>
        <div className={classes.column}>
          <p>Help</p>
          <ul>
            <li>Help Center</li>
            <li>Order Status</li>
            <li>Size Chart</li>
            <li>Returns & Warranty </li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={classes.column}>
          <p>About</p>
          <ul>
            <li>About Us</li>
            <li>Responsibility</li>
            <li>Technology & Innovation</li>
            <li>Explore our stories</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
