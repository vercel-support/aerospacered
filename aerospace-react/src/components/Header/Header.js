import React, { useRef, useEffect } from 'react';
//* Containers
import classes from "./Header.module.css";

//* Images
import REA_Logo from "../../static/images/REA_Logo.png";

//TODO Sccrolling

const Header = (props)=>{

    const headerRef = useRef(null);
    const LogoBrandRef = useRef(null);
    let HeaderClasses = [classes.HeaderNormal];
    
    useEffect(() => {
        if (props.showNavBar){
        headerRef.current.classList.add(classes.HeaderActive);
        headerRef.current.classList.remove(classes.headerInActive);
        LogoBrandRef.current.style.opacity = '1';

        }else{
            headerRef.current.classList.remove(classes.HeaderActive);
            headerRef.current.classList.add(classes.headerInActive);
        LogoBrandRef.current.style.opacity = '0';
        }

    },);


    // if (false) {
    //     this.HeaderRef.current.style.display = "none";
    //     console.log('scroll;ing down');
    // }else{
    //     this.HeaderRef.current.style.display = "flex";
    //     console.log('scroll;ing down');

    // }
    
  

    

    return (
      <React.Fragment>
        <div className={HeaderClasses.join(" ")} ref={headerRef}>
          <div className={classes.LogoContainer}>
            <img
              src={REA_Logo}
              className={classes.LogoImg}
              alt="Red Ecuatoriana Aeroespacial\'s logo"
            ></img>
            <h1 className={classes.LogoBrand} ref={LogoBrandRef}>
              Red Ecuatoriana
              <span className={classes.LogoSpan}> Aeroespacial </span>
            </h1>
          </div>

          <div className={classes.LinkContainer}>
            <div>
              <a className={classes.Link} href="https://github.com">
                
                Projects
              </a>
            </div>
            <div>
              <a className={classes.Link} href="https://github.com">
               
                Missions
              </a>
            </div>
            <div>
              <a className={classes.Link} href="https://github.com">
                
                Join us
              </a>
            </div>
            <div>
              <a className={classes.Link} href="https://github.com">
            
                About us
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  
}

export default Header;
