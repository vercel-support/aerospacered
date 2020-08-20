import React from "react";

import Members from '../Members/Members';

//* CSS
import classes from "./About_us.module.css";


const AboutUs = (props) => {


  return (
    <div className={classes.AboutUs}>
      <h2>Sobre nosotros </h2>

      <div className={classes.AboutUsContainer}>
        <div className={classes.AboutUsBody}>
          <h4>Historia</h4>
          <p>
          Durante el periodo académico 2019-2020, un grupo seleccionado de alumnos la Facultad de Mecánica de la Escuela Superior Politécnica de Chimborazo tienen la oportunidad de inscribirse en una actividad que les permite aumentar su formación científica con un programa exclusivo de prácticas y sesiones de divulgación científica, Con el fin de profundizar la cooperación y promover la investigación científica universitaria, brindando la oportunidad de compartir trabajos investigativos orientados a resolver problemas de la sociedad , como también de reconocer el trabajo de estudiantes que poseen habilidades y gran potencial.
          <br/>
          <br/>
A lo largo de los meses se han desarrollado actividades que se llevaron a cabo por primera vez en la Facultad de Mecánica de la Escuela Superior Politécnica de Chimborazo, como también hemos participado en numerosos congresos donde se a compartido con investigadores alrededor de temáticas como nanotecnología y nanociencia, simulación y visualización de materiales, entre otros.
          </p>

          <h4>La Red y las Universidades</h4>
          <p>
          Nosotros como Red queremos asegurar la vinculación académica y de investigación entre universidades nacionales y extranjeras, así como la transferencia e intercambio de conocimiento con empresas y la creación de redes de trabajo nacionales e internacionales relacionadas con materiales, nanotecnología, drones, y máquinas que ayuden al avance de la tecnología.

Por medio del apoyo y gestión de docentes, hemos podido realizar varios estudios en el campo de materiales, y por medio de ayuda académica en el diseño y construcción de naves no tripuladas por parte de docentes internacionales.
          </p>

          <h4>Docentes y estudiantes</h4>
          <p>
            La tarea de llevar a cabo todas las actividades mencionados en la sección de proyectos es ardua. Para ello, docentes, investgiadores y estudiantes trabajan de manera conjunta en las diferentes etapas de los proyectos. La experiencia es un recurso invaluable en cualquier proyecto
            por ello, mientras que los estudiantes plantean modelos y soluciones, son los docentes e investigadores los que validan   
          </p>

          
        </div>
        <div className={classes.AboutUsBanner}></div>
      </div>
      <h4>Miembros</h4>
      <Members/>
    </div>
  );
};
export default AboutUs;
