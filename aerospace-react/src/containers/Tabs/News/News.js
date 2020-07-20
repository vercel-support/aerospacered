import React from 'react';

//* CSS
import styles from './News.module.css';

//* Components
import Article from '../../../components/News/Article/Article';

const news = (props) =>{
    return(

        <React.Fragment className={styles.News}>
            <Article className={styles.Section} type='bitacora'/>
            <Article className={styles.Section} type='announcement'/>

        </React.Fragment>
    );
};

export default news;