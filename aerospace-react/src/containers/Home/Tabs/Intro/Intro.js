import React, {useRef, useEffect} from 'react';
import Polyglot from 'node-polyglot';

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

    useEffect(() => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
        return () => {
            
        };
    }, [props.hasChanged]);

    //TODO English version
    const phrasesEN = {
        locale: 'en',
        phrases: {
            'intro.label':'Research and Development',
            'intro.body': 'The Ecuadorian aerospace network is a motivated multidisciplinary research and development team, that covers the areas of aerospace, karting, robotics and nano-materials. Made up mostly of students and teachers from the Escuela Superior Politécnica de Chimborazo, they work jointly with the GIDETER ESPOCH research group. It is important to emphasize that the REA is accredited and supervised by the SENESCYT.'
                }

    }
    
    //TODO Spanish version
    const phrasesES = {
        locale: 'es',
        phrases: {
            'intro.label':'Investigación y desarrollo',
            'intro.body': 'La red ecuatoriana aeroespacial es un equipo motivado de investigación y desarrollo multidisciplinario, es decir, cubre las áreas de aeroespacial, karting, robótica y nano-materiales. Conformado en su mayoría por estudiantes y docentes de la Escuela Superior Politécnica de Chimborazo que trabaja de forma conjunta con el grupo de investigación GIDETER ESPOCH, es importante recalcar que la REA tiene acreditación y seguimiento por parte de la SENESCYT',
        }
    }


    const polyglotEN = new Polyglot(phrasesEN);
    const polyglotES = new Polyglot(phrasesES)


    return( 
        <React.Fragment>
            <div className={classes.IntroContainer}>   
                <h2 className={classes.Intro_Title}> Red Ecuatoriana <span> Aeroespacial </span> </h2>
                <h3 className={classes.Intro_Label}> 
                {(props.language === 'es') ? polyglotES.t('intro.label'):polyglotEN.t('intro.label')}
             </h3>
                <div className={classes.IntroBodyWrapper}> 
                    <p className={classes.IntroBody}> 
                    {(props.language === 'es') ? polyglotES.t('intro.body'):polyglotEN.t('intro.body')}
                    </p>
                    <img ref={logoRef} src={REA_Logo} className={classes.logo} alt='Logo Red Ecuatoriana Aeroespacial' />
                </div>
            </div>
        </React.Fragment>

    );

}

export default React.memo(Intro);