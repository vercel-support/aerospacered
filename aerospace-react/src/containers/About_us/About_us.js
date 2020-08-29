import React, {useEffect} from "react";
import Polyglot from 'node-polyglot';
import {Helmet} from 'react-helmet';

import Members from '../Members/Members';

//* CSS
import classes from "./About_us.module.css";


const AboutUs = (props) => {

  useEffect(() => {
    document.body.scrollTop = window.innerHeight-60; // For Safari
    document.documentElement.scrollTop = window.innerHeight-60;
    return () => {
        
    };
}, [props.hasChanged]);



 //TODO English version
 const phrasesEN = {
  locale: 'en',
  phrases: {
      'main.title':'About us',
      'main.history': 'History',
      'history.body': 'The meetings of the Ecuadorian Aerospace Network took place in the classrooms of the Higher Polytechnic School of Chimborazo. After announcing the project, the GIDETER research group decided to support us in the academic and sociologist field. This was a turning point for the Network as working with GIDETER meant having a space at the Escule Superior Politécnia de Chimborazo to work exclusively on this project. It was in this space, what is now the Aerospace Laboratory, that the meetings for the legal formation of the Network took place. At the beginning of the following year, in 2020, the Network was legally recognized by SENESCYT. After this great event began to work fully on the projects marked for the period 2020-2021. ',
      'history.body2': 'Our presentations in several events held at the Higher Polytechnic School of Chimborazo as Third Congress of Mechanics, was achieved the integration of new teachers, researchers and students to the team. Currently the Network consists of about 30 members of different national and international educational institutions',
      
      'main.universities': 'Universities and Fellows',
      'universities.body': 'As a Network, we want to ensure academic and research relationship between national and foreign universities, as well as the transfer and exchange of knowledge with companies and the creation of national and international cooperation to work on materials, nanotechnology, drones, and machines that help the advancement of technology. ',

      'main.professors': 'Professors and Students',
      'professors.body': 'The task of carrying out all the activities mentioned in the projects section is arduous. For this, teachers, researchers and students work together in the different stages of the projects. Experience is an invaluable resource in any project for this reason, while students propose models and solutions, it is teachers and researchers who validate',

      'main.members': 'Members',
    
  }

}

//TODO Spanish version
const phrasesES = {
  locale: 'es',
  phrases: {
    'main.title': 'La Red',
    
    
    'main.history': 'Historia',
    'history.body': 'Las pirmeras reuniones de la Red Ecuatoriana Aeroespacial tuvieron lugar en las aulas de la Escuela Superior Politécnica De Chimborazo. Tras dar a conocer el proyecto, el grupo de investigación GIDETER decidió prestarnos apoyo en el tema académico y de lógista. Esto fue un punto de inflexión para la Red ya que trabajar con GIDETER significó tener un espacio en la Escule Superior Politécnia de Chimborazo en el que trabajar dedicado únicamente a este proyecto. Fue en este espacio, lo que ahora es el laboratorio de Aeroespacial, donde tuvieron lugar las reuniones para la formación legal de la Red. Al inicio del año siguiente, en 2020, la Red fue reconocida legalmente por la SENESCYT. Tras este gran suceso se empezó a trabajar de lleno en los proyectos marcados para el periodo 2020-2021.',
    'history.body2': 'Participando en varios eventos realizado en la Escuela Superior Politécnica de Chimborazo como Tercer Congreso de Mecánica, se logró la integración de nuevos profesores, investigadores y estudiantes al equipo. Actualmente la Red está conformada por cerca de 30 miembros de diferentes instituciones educativas nacionales e internacionales.',
  
    'main.universities': 'La Red y las Universidades',
    'universities.body': 'Como Red, queremos asegurar la vinculación académica y de investigación entre universidades nacionales y extranjeras, así como la transferencia e intercambio de conocimiento con empresas y la creación de redes de trabajo nacionales e internacionales relacionadas con materiales, nanotecnología, drones, y máquinas que ayuden al avance de la tecnología. ',
    
    'main.professors': 'Profesores y Estudiantes',
    'professors.body': 'La tarea de llevar a cabo todas las actividades mencionados en la sección de proyectos es ardua. Para ello, docentes, investgiadores y estudiantes trabajan de manera conjunta en las diferentes etapas de los proyectos. La experiencia es un recurso invaluable en cualquier proyecto por ello, mientras que los estudiantes plantean modelos y soluciones, son los docentes e investigadores los que validan',
    'main.members': 'Miembros',
}
}


const polyglotEN = new Polyglot(phrasesEN);
const polyglotES = new Polyglot(phrasesES);


  return (
    <React.Fragment> 
        <Helmet>
          <title>
            {(props.language === 'es') ? 'Sobre nosotros | Red Ecuatoriana Aeroespacial':'About us | Red Ecuatoriana Aeroespacial'}
          </title>

          <meta name="description" content="La Red Ecuatoriana Aeroespacial fue fundada el 2019 y reconocida legalmente por la Senescyt en 2020. Desde entonces se ha trabajado arduamente en los proyectos planteados."/>
          <meta property="og:type" content="website"/>
        </Helmet>
          <div className={classes.AboutUs}>
        <h2>{(props.language === 'es') ? polyglotES.t('main.title'):polyglotEN.t('main.title')} </h2>

      <div className={classes.AboutUsContainer}>
        <div className={classes.AboutUsBody}>
          <h4>{(props.language === 'es') ? polyglotES.t('main.history'):polyglotEN.t('main.history')}  </h4>
          <p>{(props.language === 'es') ? polyglotES.t('history.body'):polyglotEN.t('history.body')} 
          
          <br/>
          <br/>
          {(props.language === 'es') ? polyglotES.t('history.body2'):polyglotEN.t('history.body2')} 
          
          </p>

          <h4>{(props.language === 'es') ? polyglotES.t('main.universities'):polyglotEN.t('main.universities')} </h4>
          <p>
          {(props.language === 'es') ? polyglotES.t('universities.body'):polyglotEN.t('universities.body')} 
          </p>

          <h4>{(props.language === 'es') ? polyglotES.t('main.professors'):polyglotEN.t('main.professors')}  </h4>
          <p>
          {(props.language === 'es') ? polyglotES.t('professors.body'):polyglotEN.t('professors.body')}  
          </p>

          
        </div>
        <div className={classes.AboutUsBanner}></div>
      </div>
      <h4>{(props.language === 'es') ? polyglotES.t('main.members'):polyglotEN.t('main.members')} </h4>
      <Members language={props.language}/>
    </div>
       
    </React.Fragment>

  );
};
export default AboutUs;
