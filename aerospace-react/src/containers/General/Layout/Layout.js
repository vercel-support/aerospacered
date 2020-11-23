import React from 'react';

//* CSS
import classes from './Layout.module.css';

const Layout = (props) => {


    // useEffect(() => {
    //     document.body.scrollTop = window.innerHeight-60; // For Safari
    //     document.documentElement.scrollTop = window.innerHeight-60;
    //     console.log('Moving')
    //     return () => {
            
    //     };
    // }, [props.hasChanged]);


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

export default Layout;