import React, { Component } from 'react';
import axios from 'axios';

//* CSS
import styles from './News.module.css';

//* Components
import Article from '../../News/Article/Article';
import Spinner from '../../../../components/spinner/spinner';


class News extends Component{
    state ={
        articles: [],
        loading: true
    }
    
    componentDidMount(){
        this.setState({loading: true});
        axios.get('https://127.0.1.1:8000/api/articles/')
            .then(response => {
                
                this.setState({articles: response.data.reverse()});
                
            })
            .then( response =>{
                this.setState({loading:false });
            })
            .catch(error => {
                this.setState({loading:true});
            })

        
    }
    
    render(){
        let articles = this.state.articles.map(article =>{
            
            return <Article 
                    className={styles.Section} 
                    title={article.title}
                    date={article.date}
                    body={article.body} 
                    img_url={article.img}
                    key={article.index}
                    />
        });

        if (this.state.loading){
            articles = <div>
                <Spinner /> 
                <Spinner /> 
                <Spinner /> 
                
                </div>;
        }
    return(

        <React.Fragment >
            <div className={styles.NewsContainer}>
                <h2 className={styles.NewsTitle}>Noticias</h2>
                
                <div className={styles.BodyContainer}>
                    
                    <div className={styles.SectionContainer}>
                        {articles}
                     
                    </div>

                    <div className={styles.VerticalBanner}> 
                    <div class="fb-page" data-href="https://www.facebook.com/aerospace.ec" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/aerospace.ec" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/aerospace.ec">Red Ecuatoriana Aeroespacial</a></blockquote></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
    }
};

export default React.memo(News);