import React from 'react';

//* CSS imports
import classes from './PageTransition.module.css';

import testIMG from '../../static/images/REA_Logo.png';


const PageTransitrion = props =>{




    return (
        <div className={classes.PageTransitionWrapper}>
                <img src={testIMG} alt='Red Ecuatoriana Aeroespacial' />
        </div>
    )
} 

export default PageTransitrion;