import React from 'react';
import {Helmet} from 'react-helmet';

//* CSS


//* Containers
import News  from '../Tabs/News/News';
import Intro  from '../Tabs/Intro/Intro';
import SlideShow from './SlideShow/SlideShow';

const MainContent = (props) =>{

        return (
            <React.Fragment> 
            <Helmet>
            <title>Red Ecuatoriana Aeroespacial</title>
<meta name="title" content="Red Ecuatoriana Aeroespacial"/>
<meta name="description" content="La Red Ecuatoriana Aeroespacial es un equipo de investigación y desarrollo multidisciplinario enfocado especialmente en aeroespacial y nano-materiales reconocido por la Senescyt"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://www.facebook.com/Aerospace.ec"/>
<meta property="og:title" content="Red Ecuatoriana Aeroespacial"/>
<meta property="og:description" content="La Red Ecuatoriana Aeroespacial fue fundada el 2019 y reconocida legalmente por la Senescyt en 2020. Desde entonces se ha trabajado arduamente en los proyectos planteados."/>
<link rel="icon" href="https://aerospaceec.pythonanywhere.com/static/img/REA_Logo.png" />

      
<link rel="canonical" href="http://www.redaeroespacial.com" />
<link rel="apple-touch-icon" href="https://aerospaceec.pythonanywhere.com/static/img/REA_Logo.png" />
  
    
            </Helmet>

            <div>
        
                <Intro showLogo={props.showLogo} language={props.language}/>
                <SlideShow language={props.language} />
               
                <News language={props.language} /> 
                
            </div>
            </React.Fragment> 

        );


}

export default MainContent;