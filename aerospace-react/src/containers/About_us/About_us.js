import React from "react";

//* CSS
import classes from "./About_us.module.css";

const AboutUs = (props) => {
  return (
    <div className={classes.AboutUs}>
      <h2>About us! </h2>

      <div className={classes.AboutUsContainer}>
        <div className={classes.AboutUsBody}>
          <h4>Historia</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa velit
            saepe porro ad dolorem doloribus, veniam vel consectetur sapiente
            provident perspiciatis? Dolores saepe incidunt sint, aliquid
            adipisci rem odit sapiente.
          </p>

          <h4>Universidad</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa velit
            saepe porro ad dolorem doloribus, veniam vel consectetur sapiente
            provident perspiciatis? Dolores saepe incidunt sint, aliquid
            adipisci rem odit sapiente.
          </p>

          <h4>Docentes y estudiantes</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa velit
            saepe porro ad dolorem doloribus, veniam vel consectetur sapiente
            provident perspiciatis? Dolores saepe incidunt sint, aliquid
            adipisci rem odit sapiente.
          </p>

          
        </div>
        <div className={classes.AboutUsBanner}></div>
      </div>
    </div>
  );
};
export default AboutUs;
