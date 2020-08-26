import React, { useRef, useEffect } from 'react';
import {  NavLink,  } from 'react-router-dom'  
//* Containers
import classes from "./MobileHeader.module.css";

//* Images
import REA_Logo from '../../../static/images/REA_Logo.png'

//TODO Sccrolling

const Header = (props)=>{

    const menutButtonRef = useRef(null);
    const panelRef0 = useRef(null);
    const panelRef1 = useRef(null);
    const panelRef2 = useRef(null);
    const panelRef3 = useRef(null);
    const panelRef4 = useRef(null);

    
    useEffect(() => {
        if (props.lateralMenu){
            menutButtonRef.current.classList.add(classes.MenuButtonActive);
            panelRef0.current.style.transform = 'translateX(0px)';
            panelRef1.current.style.transform = 'translateX(0px)';
            panelRef2.current.style.transform = 'translateX(0px)';
            panelRef3.current.style.transform = 'translateX(0px)';
            panelRef4.current.style.transform = 'translateX(0px)';
            // panelRef.div.style.transform = 'translateX(-50px)';
        // LogoImgRef.current.style.filter = 'invert(85%)';



        }else{
            menutButtonRef.current.classList.remove(classes.MenuButtonActive);
            panelRef0.current.style.transform = 'translateX(-105%)';
            panelRef1.current.style.transform = 'translateX(-105%)';
            panelRef2.current.style.transform = 'translateX(-105%)';
            panelRef3.current.style.transform = 'translateX(-105%)';
            panelRef4.current.style.transform = 'translateX(-105%)';

            //     headerRef.current.classList.add(classes.headerInActive);
        // LogoBrandRef.current.style.opacity = '0';
        // LogoImgRef.current.style.filter = 'invert(0%)';
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
        <div className={classes.HeaderNormal} >
 
          <div className={classes.LogoContainer}>
            <NavLink to='/'>
            <img
              src={REA_Logo}
              className={classes.LogoImg}
              alt="Red Ecuatoriana Aeroespacial\'s logo"
            /></NavLink>
            <h1 className={classes.LogoBrand}>
              Red Ecuatoriana
              <span className={classes.LogoSpan}> Aeroespacial </span>
            </h1>

            <div className={classes.MenuButton} 
                ref={menutButtonRef}
                onClick={props.panelController}> </div>



          </div>

          <div className={classes.LinkContainer}>
          <div className={classes.LinkWrapper0} ref={panelRef0}> 
              <NavLink 
                className={classes.Link} 
                activeClassName={classes.active}
                to="/">
                
                {(props.language === 'es') ? 'Inicio':'Home'}
              </NavLink>
            </div>
            <div className={classes.LinkWrapper1}  ref={panelRef1}> 
              <NavLink 
                className={classes.Link} 
                activeClassName={classes.active}
                to="/projects">
                
                {(props.language === 'es') ? 'Proyectos':'Projects'}
                              </NavLink>
            </div>
            <div className={classes.LinkWrapper2}  ref={panelRef2}>
              <NavLink 
              className={classes.Link} 
              activeClassName={classes.active}
              to="/about_us">
            
            {(props.language === 'es') ? 'Sobre nosotros':'About us'}
              </NavLink>
            </div>
            <div className={classes.LinkWrapper3}  ref={panelRef3}>
              <NavLink 
              className={classes.Link} 
              activeClassName={classes.active}
              to="/join_us">
                
                {(props.language === 'es') ? '¡Únete!':'Join us'}
              </NavLink>
            </div>
            
            <div className={classes.LinkWrapper4}  ref={panelRef4}>
              <span 
              className={classes.LinkLanguage} 
              onClick={props.switchLanguage}

              >
                
                {(props.language === 'es') ? 'Español':'English'}
              </span>
            </div>

          </div> 

        </div>
      </React.Fragment>
    );
  
}

export default Header;
