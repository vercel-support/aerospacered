import React from "react";

import classes from './spinner.module.css';

const spinner = () => {

    const cube1 = [classes.Sk_cube1, classes.Sk_cube]
    const cube2 = [classes.Sk_cube2, classes.Sk_cube]
    const cube3 = [classes.Sk_cube3, classes.Sk_cube]
    const cube4 = [classes.Sk_cube4, classes.Sk_cube]
  return (
    <div className={classes.Sk_folding_cube}>
      <div className={cube1.join(' ')}></div>
      <div className={cube2.join(' ')}></div>
      <div className={cube4.join(' ')}></div>
      <div className={cube3.join(' ')}></div>

    </div>
  );
};

export default spinner;
