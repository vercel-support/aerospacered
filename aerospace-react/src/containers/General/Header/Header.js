import React, { useRef, useEffect } from 'react';
import {  NavLink,  } from 'react-router-dom';  
import { CSSTransition } from 'react-transition-group';

//* CSS
import classes from "./Header.module.css";
import './HeaderTransitions.css';
//* Images
import REA_Logo from '../../../static/images/REA_Logo.png'

//TODO Sccrolling

const Header = (props)=>{

    const headerRef = useRef(null);
    const LogoBrandRef = useRef(null);
    const LogoImgRef = useRef(null);
    let HeaderClasses = [classes.HeaderNormal];
    
    useEffect(() => {
        if (props.showNavBar){
        headerRef.current.classList.add(classes.HeaderActive);
        headerRef.current.classList.remove(classes.headerInActive);
        LogoBrandRef.current.style.opacity = '1';
        LogoImgRef.current.style.filter = 'invert(85%)';


        }else{
            headerRef.current.classList.remove(classes.HeaderActive);
            headerRef.current.classList.add(classes.headerInActive);
        LogoBrandRef.current.style.opacity = '0';
        LogoImgRef.current.style.filter = 'invert(0%)';
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
        <div className={HeaderClasses.join(" ")} ref={headerRef}
                    onWheelCapture={props.onScrollMethod} 
                    onKeyDownCapture={props.onScrollMethod}
                    tabIndex='-1'>
 
          <div className={classes.LogoContainer}>
            <NavLink to='/' 
              onClick={props.switchToHome}
              onClickCapture={props.switchToHome}
              tabIndex='-1' >
            <img
              src={REA_Logo}
              className={classes.LogoImg}
              alt="Red Ecuatoriana Aeroespacial\'s logo"
              ref={LogoImgRef}
            /></NavLink>
            <h1 className={classes.LogoBrand} ref={LogoBrandRef}>
              Red Ecuatoriana
              <span className={classes.LogoSpan}> Aeroespacial </span>
            </h1>
          </div>

          <div className={classes.LinkContainer}>
            <div>
            <CSSTransition
                  in={props.languageHasChanged}
                  timeout={500}
                  classNames='transitionLink'
                  unmountOnEnter 
                >
              <NavLink 
                className={classes.Link} 
                activeClassName={classes.active}
                to="/projects"
                onClick={props.switchPage}>
                
                  {(props.language === 'es') ? 'Proyectos':'Projects'}
                
                
              </NavLink>
              </CSSTransition>

            </div>
            <div>
            <CSSTransition
                  in={props.languageHasChanged}
                  timeout={500}
                  classNames='transitionLink'
                  unmountOnEnter 
                >
              <NavLink 
              className={classes.Link} 
              activeClassName={classes.active}
              to="/about_us"
              onClick={props.switchPage}>
                              {(props.language === 'es') ? 'Sobre nosotros':'About us'}

                
              </NavLink>
              </CSSTransition>
            </div>
            <div>
            <CSSTransition
                  in={props.languageHasChanged}
                  timeout={500}
                  classNames='transitionLink'
                  unmountOnEnter 
                >
              <NavLink 
              className={classes.Link} 
              activeClassName={classes.active}
              to="/join_us"
              onClick={props.switchPage}>
                  {(props.language === 'es') ? '¡Únete!':'Join us'}
                
                
              </NavLink>
              </CSSTransition>
            </div>
            <div>
            <CSSTransition
                  in={props.languageHasChanged}
                  timeout={500}
                  classNames='transitionLink'
                  unmountOnEnter 
                >
              <div
              className={classes.LanguageSelector} 
              onClick={props.switchLanguage}
              >
                
                  {(props.language === 'es') ? 'ES':'EN'}
              </div>
              </CSSTransition>

            </div>

          </div>
        </div>
      </React.Fragment>
    );
  
}

export default Header;
