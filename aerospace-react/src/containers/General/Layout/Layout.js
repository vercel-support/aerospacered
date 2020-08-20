import React from 'react';

//* CSS
import classes from './Layout.module.css';

const layout = (props) => {
    const scrollWin = ()=> {
        window.scrollTo(0, window.innerHeight-100);
      };
      scrollWin();
    return(

    <React.Fragment>
 
        <main className={classes.Content} onWheelCapture={props.onScrollMethod}  > 
            <div className={classes.ContentWrapper}>
                {props.children}
            </div>
        </main> 
    </React.Fragment>
    )
    };

export default layout;