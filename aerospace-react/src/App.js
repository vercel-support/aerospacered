import React, { Component } from 'react';
import Layout from './components/Layout/Layout'



//* JSX Containers
import Header from './components/Header/Header';
import Landing from './containers/Landing/Landing';
import MainContent from './containers/Main/MainContent';
import Footer from './containers/Footer/Footer';
//* CSS
//import classes from './assets/common/structure.module.css'


class App extends Component {
  state = {
    showNavBar: false,
  }
  componentDidMount(){

  }
  //TODO Navbar controller
  handleScroll = e => {
    let top  = window.pageYOffset || document.documentElement.scrollTop;
    const h = window.innerHeight;
    if (top > h) {
      this.setState({showNavBar: true})
    }else{
      this.setState({showNavBar: false})
    }
  }





  render(){
    return (

      <React.Fragment>       
        {/* Header */}  
        <Header showNavBar={this.state.showNavBar}/>
        

        {/* End Header */} 

        {/* Landing */} 
        <Landing /> 

        {/* End Body */}


        {/* Body */}  

        {/* End Body */}

        {/* Mail box */}  

        {/* End Mail box */} 

        {/* Footer */}  

        {/* End Footer */} 
      <div> 
        <Layout onScrollMethod={this.handleScroll}>
          <MainContent   />
        </Layout>
      </div>
      <Footer/>
      </React.Fragment>  

    );
  }
}




export default App;
