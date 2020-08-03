import React, {  } from 'react';


//* Containers
import classes from './Landing.module.css';

const landing = (props) => {

    
        return (

            <div onWheelCapture={props.onScrollMethod}>
                <div  className={classes.LandingBackground}>
                    <div className={classes.arrow}  >
                        <div className={classes.arrow_top}></div>
                        <div className={classes.arrow_bottom}></div>
                    </div>
                </div>
            </div>

        );
    

}

export default landing;