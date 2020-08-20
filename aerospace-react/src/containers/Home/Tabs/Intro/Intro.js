import React, {useRef, useEffect} from 'react';

//* CSS import
import classes from './Intro.module.css';
import REA_Logo from '../../../../static/images/REA_Logo.png';

const Intro = (props) =>{

    const logoRef = useRef(null);
    
    useEffect(() => {
        if (props.showLogo){
            logoRef.current.classList.add(classes.logo_active);
        }
    },);

    return(
        <React.Fragment>
            <div className={classes.IntroContainer}  >   
                <h2 className={classes.Intro_Title}> Red Ecuatoriana <span> Aeroespacial </span> </h2>
                <h3 className={classes.Intro_Label}> Investigación y desarrollo</h3>
                <div className={classes.IntroBodyWrapper}> 
                    <p className={classes.IntroBody}> 
                    La red ecuatoriana aeroespacial es un equipo motivado de investigación y desarrollo multidisciplinario, es decir, cubre las áreas de aeroespacial, karting, robótica y nano-materiales. Conformado en su mayoría por estudiantes y docentes de la Escuela Superior Politécnica de Chimborazo que trabaja de forma conjunta con el grupo de investigación GIDETER ESPOCH, es importante recalcar que la REA tiene acreditación y seguimiento por parte de la SENESCYT.
                    </p>
                    <img ref={logoRef} src={REA_Logo} className={classes.logo} alt='Logo Red Ecuatoriana Aeroespacial' />
                </div>
            </div>
        </React.Fragment>

    );

}

export default React.memo(Intro);