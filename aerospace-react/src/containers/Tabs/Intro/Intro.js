import React from 'react';

//* CSS import
import classes from './Intro.module.css';


const intro = (props) =>{



    return(
        <React.Fragment>
            <div className={classes.IntroContainer}  >   
                <h2 className={classes.Intro_Title}> Red Ecuatoriana <span> Aeroespacial </span> </h2>
                <h3 className={classes.Intro_Label}> Investigaci'on y desarrollo</h3>
                <p className={classes.IntroBody}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio dolore earum facilis laboriosam sunt doloribus ad nam perspiciatis, sed corporis ea consequuntur sequi quis minima quia qui, modi exercitationem. Ea.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio dolore earum facilis laboriosam sunt doloribus ad nam perspiciatis, sed corporis ea consequuntur sequi quis minima quia qui, modi exercitationem. Ea.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio dolore earum facilis laboriosam sunt doloribus ad nam perspiciatis, sed corporis ea consequuntur sequi quis minima quia qui, modi exercitationem. Ea.
                </p>
            </div>
        </React.Fragment>

    );

}

export default intro;