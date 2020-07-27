import React from "react";

//* CSS
import classes from "./Footer.module.css";
//* Images
import tw_svg from "../../../static/images/media/tw.svg";
import ig_svg from "../../../static/images/media/ig.svg";
import fb_svg from "../../../static/images/media/fb.svg";
import yt_svg from "../../../static/images/media/yt.svg";
import aerospace_logo from '../../../static/images/REA_Logo.png'


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
      <img src={aerospace_logo} className={classes.aerospace_logo}alt='logo Red Ecuatoriana Aeroespacial logo'/>

      
    </div>
    <h3 className={classes.CitationLink}> Powered by: <a href="www.6268up.com">6268up</a> <span> @2020 Red Ecuatoriana Aeroespacial</span> </h3>
    </React.Fragment>

  );
};

export default Footer;
