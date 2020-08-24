import React from 'react';

//* CSS


//* Containers
import News  from '../Tabs/News/News';
import Intro  from '../Tabs/Intro/Intro';
import SlideShow from './SlideShow/SlideShow';

const MainContent = (props) =>{

        return (

            <div>
        
                <Intro showLogo={props.showLogo} language={props.language}/>
                <SlideShow language={props.language} />
               
                <News language={props.language} /> 
                
            </div>

        );


}

export default MainContent;