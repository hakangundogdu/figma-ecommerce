import React from 'react';
import Button from '../components/ui/Button';
import classes from './Home.module.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={classes.hero}>
      <header className={classes.header}>
        <h1>Better clothing for the planet</h1>
        <p>
          Create screens directly in Method or add your images from Sketch or{' '}
          <br />
          Figma. You can even sync designs from your cloud storage!
        </p>
        <Link to="Shop">
          <Button className={classes.button} name="Shop All" />
        </Link>
      </header>
      <div className={classes.box}>
        <img src="/assets/cover.jpg" alt="clothes" />
      </div>
      <div className={classes.icons}>
        <img src="/assets/image1.png" width="184px" height="auto" alt="icon" />
        <img src="/assets/image2.png" width="95px" height="auto" alt="icon" />
        <img src="/assets/image3.png" width="122px" height="auto" alt="icon" />
        <img src="/assets/image4.png" width="142px" height="auto" alt="icon" />
      </div>
    </div>
  );
};

export default Home;
