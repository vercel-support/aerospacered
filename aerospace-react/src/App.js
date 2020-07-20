import React, { Component } from 'react';
import Layout from './components/Layout/Layout'



//* JSX Containers
import Header from './containers/Header/Header';
import Landing from './containers/Landing/Landing';
import MainContent from './containers/Main/MainContent';

//* CSS
import classes from './assets/common/structure.module.css'


class App extends Component {
  render(){
    return (

      <React.Fragment>       
        {/* Header */}  
        <Header/>
        

        {/* End Header */} 

        {/* Landing */} 
        <Landing/> 

        {/* End Body */}


        {/* Body */}  

        {/* End Body */}

        {/* Mail box */}  

        {/* End Mail box */} 

        {/* Footer */}  

        {/* End Footer */} 
      <div> 
        
        <Layout >
          <h1> Keep fighting</h1>
          <MainContent />
        </Layout>
      </div>

      </React.Fragment>  

    );
  }
}

export default App;
