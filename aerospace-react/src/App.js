import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

//* JSX Containers
import Layout from "./containers/General/Layout/Layout";
import Header from "./containers/General/Header/Header";
import Landing from "./containers/General/Landing/Landing";
import MainContent from "./containers/Home/Main/MainContent";
import Projects from './containers/Projects/Projects';
import AboutUs from './containers/About_us/About_us';
import JoinUs from './containers/Join_us/Join_us';
import Footer from "./containers/General/Footer/Footer";
//* CSS
//import classes from './assets/common/structure.module.css'

class App extends Component {
  state = {
    showNavBar: false,
  };

  //TODO Navbar controller
  handleScroll = (e) => {
    let top = window.pageYOffset || document.documentElement.scrollTop;
    const h = window.innerHeight;
    if (top > h) {
      this.setState({ showNavBar: true });
    } else {
      this.setState({ showNavBar: false });
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* Header */}
        <Header showNavBar={this.state.showNavBar} />

        {/* End Header */}

        {/* Landing */}
        <Landing />

        {/* End Body */}

        <div>
          <Layout onScrollMethod={this.handleScroll}>
            <Switch>
              <Route path='/about_us' component={AboutUs}/>
              <Route path='/projects' component={Projects}/>
              <Route path='/missions' component={AboutUs}/>
              <Route path='/join_us' component={JoinUs}/>
              <Route path='/' extact component={MainContent}/>
            </Switch>
          </Layout>
        </div>
  


        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
