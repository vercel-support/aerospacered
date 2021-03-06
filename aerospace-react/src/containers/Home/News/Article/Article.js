import React, {} from 'react';

//* CSS
import styles from './Article.module.css'


const Article = (props) => {


    // function dateFormat(){
    //     console.log(props.date)
    // }
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',];

    let article_year = props.date.slice(0, 4);
    let article_month = months[parseInt(props.date.slice(5, 7))-1];
    let article_day = props.date.slice(9, 10);
    let img_url = 'https://aerospaceEC.pythonanywhere.com'+props.img_url;    
    return (
        <div className={styles.ArticleContainer}>
           
            <h4> {props.title} </h4>
            <h6> {article_day} de {article_month} de {article_year} </h6>
            <img src={img_url} alt={props.title} />
            <p> {props.body} </p>
        </div>
    )
};

export default Article;