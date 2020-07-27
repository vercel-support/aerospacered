import React from 'react';

import Project from './Project/Project';
//* CSS 
import classes from './Projects.module.css';

const Projects = (props) =>{
    const proje= 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima sequi error asperiores non quo reiciendis? Expedita dolor, veritatis ducimus nihil voluptates, placeat hic vero amet voluptate quod, voluptatem quia? Commodi!'
    return(
        <div className={classes.ProjectsContainer}>
            <h2>Proyectos </h2>
            <Project projectName={'Dron Multiprop'} projectBody={proje}/>
            <Project projectName={'Canal de YouTube'} projectBody={proje}/>


        </div>

    )
}
export default Projects;