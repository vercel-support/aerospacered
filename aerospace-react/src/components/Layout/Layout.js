import React from 'react';

//* CSS
import classes from './Layout.module.css';

const layout = (props) => (

    <React.Fragment>
 
        <main className={classes.Content}> 
            {props.children}
        </main> 
    </React.Fragment>
);

export default layout;