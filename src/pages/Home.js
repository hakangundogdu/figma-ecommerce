import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import classes from './Home.module.scss';

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
        <Link to="/Shop">
          {' '}
          <Button className={classes.button} name="Shop All" />
        </Link>
      </header>
      <div className={classes.box}>
        <img src={process.env.PUBLIC_URL + '/images/cover.jpg'} alt="clothes" />
      </div>
      <div className={classes.icons}>
        <img
          src={process.env.PUBLIC_URL + '/images/image1.png'}
          width="184px"
          height="auto"
          alt="icon"
        />
        <img
          src={process.env.PUBLIC_URL + '/images/image2.png'}
          width="95px"
          height="auto"
          alt="icon"
        />
        <img
          src={process.env.PUBLIC_URL + '/images/image3.png'}
          width="122px"
          height="auto"
          alt="icon"
        />
        <img
          src={process.env.PUBLIC_URL + '/images/image4.png'}
          width="142px"
          height="auto"
          alt="icon"
        />
      </div>
    </div>
  );
};

export default Home;
