import React from "react";

//* CSS
import classes from "./Footer.module.css";
//* Images
import tw_svg from "../../../static/images/media/tw.svg";
import ig_svg from "../../../static/images/media/ig.svg";
import fb_svg from "../../../static/images/media/fb.svg";
import yt_svg from "../../../static/images/media/yt.svg";
// import aerospace_logo from '../../../static/images/REA_Logo.png'
import espoch_logo from '../../../static/images/espoch.png'
import senescyt_logo from '../../../static/images/senescyt.png'

const Footer = (props) => {
  return (
    <React.Fragment>
    <div className={classes.Footer}>

      <div className={classes.Links}> 
        <ul>
          <li></li>
        </ul>
      </div>

      <div className={classes.SocialMediaContainer}>
        
        <a href='www.twitter.com'><img src={tw_svg} alt="Red Ecuatoriana Aeroespacial Twitter" /></a>
        <a href='https://www.facebook.com/Aerospace.ec/'><img src={ig_svg} alt="Red Ecuatoriana Aeroespacial Facebook" /></a>
        <a href='https://www.youtube.com/channel/UCUOeG6BpVEMdmIaOAUiktcQ'><img src={fb_svg} alt="Red Ecuatoriana Aeroespacial Youtubee" /></a>
        <a href='https://www.instagram.com/aerospace_ec/'><img src={yt_svg} alt="Red Ecuatoriana Aeroespacial Instagram" /></a>
     
        
      </div>
      <a href='https://espoch.edu.ec/' className={classes.logosWrapper} target="_blank" rel="noopener noreferrer">       
        <img src={senescyt_logo} className={classes.senescyt_logo}alt='SENESCYT logo'/>
        <img src={espoch_logo} className={classes.aerospace_logo}alt='logo Escuela Superior Politécnica de chimborazo ESPCOH'/>

      </a>
      
    </div>
    <div className={classes.FooterFoterWrapper}>
    <h3 className={classes.CitationLink}> {(props.language === 'es') ? 'Desarrollado por: ':'Developed by: '} <a href="https://www.6268up.com"> &nbsp; 6268up </a> </h3> 
    <span className={classes.Copyright}> @2020 Red Ecuatoriana Aeroespacial</span> 
    </div>
    </React.Fragment>

  );
};

export default Footer;
