import React, {  } from 'react';

//* CSS


//* Containers
// import News  from '../Tabs/News/News';
import Intro  from '../Tabs/Intro/Intro';
import SlideShow from './SlideShow/SlideShow';

const MainContent = (props) =>{

        return (

            <div>
        
                <Intro />
                {/*<News/> */}
                <SlideShow/>

            </div>

        );


}

export default MainContent;