import React from 'react';
import ReactHtmlParser from 'react-html-parser'; 
import Polyglot from "node-polyglot";

//* CSS 
import classes from './Project.module.css';
//* Image
//* https://stackoverflow.com/questions/39758136/render-html-string-as-real-html-in-a-react-component 
const Project = (props) =>{
    let img_url = 'https://aerospaceEC.pythonanywhere.com'+props.img_url;

    const monthsES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',];
    const monthsEN = ['Janvier', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];

    let article_monthES = monthsES[parseInt(props.start_date.slice(5, 7))-1];
    let article_monthEN = monthsEN[parseInt(props.start_date.slice(5, 7))-1];

        //TODO English version
        const phrasesEN = {
            locale: "en",
            phrases: {
                'list.coordinator':'Coordinator: ',
                'list.partners':'Partners: ',
                'list.state':'Project\'s state: ',
                'list.startDate':'Starting date: ',
            },
          };
      
          //TODO Spanish version
          const phrasesES = {
            locale: "es",
            phrases: {
                'list.coordinator':'Coordinador: ',
                'list.partners':'Colaboradores: ',
                'list.state':'Estado: ',
                'list.startDate':'Fecha de inicio: ',
            },
          };

          const polyglotEN = new Polyglot(phrasesEN);
          const polyglotES = new Polyglot(phrasesES);
      


    return(
        <div className={classes.projectContainer}>
            <h3>
                
            {props.language === "es"
                ? props.titleES
                : props.titleEN
            } 
                {props.title} </h3>
            <img src={img_url} alt={props.title}/>
            <p>            {props.language === "es"
                ? props.bodyES
                : props.bodyEN
            } </p>
            <ul>
                <li><span>{
              props.language === "es"
                ? polyglotES.t("list.coordinator")
                : polyglotEN.t("list.coordinator")
            } </span> {props.coordinator }</li>
                <li><span>
                    {props.language === "es"
                ? polyglotES.t("list.partners")
                : polyglotEN.t("list.partners")
            } 
            </span> {ReactHtmlParser(props.partners)} </li>
                <li><span>
                {props.language === "es"
                ? polyglotES.t("list.state")
                : polyglotEN.t("list.state")
            } </span>  {props.state}</li>
                <li><span>{props.language === "es"
                ? polyglotES.t("list.startDate")
                : polyglotEN.t("list.startDate")
            } </span> 
            
            {props.language === "es"
                ? props.start_date.slice(8,10) + ' de '+ article_monthES + ' del ' + props.start_date.slice(0,4)
                : article_monthEN +" "+ props.start_date.slice(8,10) + ', ' + props.start_date.slice(0,4)
            }
            
             </li>
                
            </ul>
        </div>

        
    )
}
export default Project;