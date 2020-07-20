import React, { Component } from 'react';


//* Containers
import classes from './Header.module.css';

//* Images
import REA_Logo from '../../static/images/REA_Logo.png';

class Header extends Component{

    render () {
        return (

            <React.Fragment>
                <div className={classes.Header}>
                    <div className={classes.LogoContainer}>
                        <img src={REA_Logo} className={classes.LogoImg} alt="Red Ecuatoriana Aeroespacial\'s logo"></img>
                        <h1 className={classes.LogoBrand}>Red Ecuatoriana <span className={classes.LogoSpan}>Aeroespacial</span></h1>
                    </div>



                    <div className={classes.LinkContainer}> 
                        <div><a className={classes.Link}  href="https://github.com"> Projects </a></div>
                        <div><a className={classes.Link} href="https://github.com"> Missions </a></div>
                        <div><a className={classes.Link}  href="https://github.com"> Join us </a></div>
                        <div><a className={classes.Link}  href="https://github.com"> About us </a></div>
                       
                    </div>
                </div>
            </React.Fragment>

        );
    }

}

export default Header;