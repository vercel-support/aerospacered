import React from 'react';

//* CSS 
import classes from './Project.module.css';
//* Image
import img_test from '../../../static/images/Landings/Landing0.jpg'

const Project = (props) =>{
    return(
        <div className={classes.projectContainer}>
            <h3>{props.projectName} </h3>
            <img src={img_test} alt={props.projectName}/>
            <p>{props.projectBody}</p>
            <ul>
                <li><span>Coordinador:</span> Vicente Coronels</li>
                <li><span>Colaboradores:</span> <a href='www.espoch.edu.ec'> ESPOCH</a> & <a href='www.senescyt.gob.ec'> SENESCYT</a></li>
                <li><span>Estado:</span>  En construcci'on</li>
                <li><span>Fecha de inicio:</span>  27/04/2019</li>
                
            </ul>
        </div>

        
    )
}
export default Project;