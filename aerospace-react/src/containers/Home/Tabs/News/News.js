import React from 'react';

//* CSS
import styles from './News.module.css';

//* Components
import Article from '../../News/Article/Article';

const news = (props) =>{
    return(

        <React.Fragment >
            <div className={styles.NewsContainer}>
                <h2 className={styles.NewsTitle}>Noticias</h2>
                
                <div className={styles.BodyContainer}>
                    
                    <div className={styles.SectionContainer}>
                        <Article className={styles.Section} type='bitacora'/>
                        <Article className={styles.Section} type='bitacora'/>

                    </div>

                    <div className={styles.VerticalBanner}> </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default news;