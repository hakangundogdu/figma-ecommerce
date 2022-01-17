import React from 'react';
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
        <button className={classes.button}>Shop All</button>
      </header>
      <div className={classes.box}></div>
      <div className={classes.icons}>
        <img src="/assets/image1.png" width="230px" height="34px" alt="icon" />
        <img src="/assets/image2.png" width="119px" height="32px" alt="icon" />
        <img src="/assets/image3.png" width="152" height="33px" alt="icon" />
        <img src="/assets/image4.png" width="186px" height="67px" alt="icon" />
      </div>
    </div>
  );
};

export default Home;
