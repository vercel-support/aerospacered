import React from 'react';

//* CSS
import classes from './Layout.module.css';

const layout = (props) => {

    return(

    <React.Fragment>
 
        <main className={classes.Content}  
            onWheelCapture={props.onScrollMethod}  
            onKeyDownCapture={props.onScrollMethod} 
            onClick={props.closeMobilePanel}
            tabIndex='-1'> 
            <div className={classes.ContentWrapper}>
                {props.children}
            </div>
        </main> 
    </React.Fragment>
    )
    };

export default layout;