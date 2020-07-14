import React from 'react';

//* CSS
import classes from './Layout.css'

const layout = (props) => (

    <React.Fragment>
        <div className={classes.test}> Toolbar, banner, subs, backdrop </div>
        <main className={classes.Content}> 
            {props.children}
        </main> 
    </React.Fragment>
);

export default layout;