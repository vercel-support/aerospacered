import React from 'react';

//* CSS
import styles from './Article.module.css'
//*Images import
import image_test from '../../../../static/images/Landings/Landing0.jpg'


const article = (props) => {

    
    return (
        <div className={styles.ArticleContainer}>
            <img src={image_test} alt={'Article\'s title'} />
            <h4> Reuni'on de directiva </h4>
            <h6>Viernes, 24 de marzo de 2020</h6>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa, aliquam delectus nihil quos autem blanditiis deserunt in corrupti ducimus fugit consequuntur eveniet adipisci quibusdam labore, laudantium saepe. Illum, eveniet.

            </p>
        </div>
    )
};

export default article;