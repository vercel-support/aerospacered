import React from 'react';

//* CSS
import styles from './Article.module.css'

const article = (props) => {

    let article_type = null;

    switch (props.type) {

        case ('bitacora'):
            article_type = <div className={styles.announcement}> This is an record article </div>
            break
        case ('announcement'):
            article_type = <div className={styles.article}> This is an announcement </div>
            break
        default:
            article_type= null
    }

    
    return article_type
};

export default article;