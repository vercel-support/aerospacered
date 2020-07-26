import React from 'react';

//* CSS import
import classes from './SlideShow.module.css';

//* Gifs import
import gif01 from '../../../static/videos/gif0.gif';



const slideShow = (props) =>{

    return(
        <React.Fragment>
            <div className={classes.SlideShowContainer}>   
                <img className={classes.gif0} src={gif01} alt='Aerospace promo video drone MD01'/>
                <div className={classes.QuoteContainer}>
                    <h4>"La exploración espacial es una fuerza de la naturaleza en sí misma que ninguna otra en la sociedad puede rivalizar."</h4>
                    <h3> Neil deGrasse Tyson </h3>
                </div>
            </div>
        </React.Fragment>

    );

}

export default slideShow;