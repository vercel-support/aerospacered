import React from 'react';
import ReactHtmlParser from 'react-html-parser'; 
//* CSS 
import classes from './Project.module.css';
//* Image
//* https://stackoverflow.com/questions/39758136/render-html-string-as-real-html-in-a-react-component 
const Project = (props) =>{
    let img_url = 'https://127.0.1.1:8000'+props.img_url;

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',];

    let article_month = months[parseInt(props.start_date.slice(5, 7))-1];

    return(
        <div className={classes.projectContainer}>
            <h3>{props.title} </h3>
            <img src={img_url} alt={props.title}/>
            <p>{props.body}</p>
            <ul>
                <li><span>Coordinador:</span> {props.coordinator }</li>
                <li><span>Colaboradores:</span> {ReactHtmlParser(props.partners)} </li>
                <li><span>Estado:</span>  {props.state}</li>
                <li><span>Fecha de inicio:</span>  {props.start_date.slice(8,10)} de {article_month} de {props.start_date.slice(0,4)} </li>
                
            </ul>
        </div>

        
    )
}
export default Project;