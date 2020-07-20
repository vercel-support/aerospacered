import React, { Component } from 'react';


//* Containers
import News  from '../Tabs/News/News';


class MainContent extends Component{

    render () {
        return (

            <React.Fragment>
        
                <News/>

            </React.Fragment>

        );
    }

}

export default MainContent;