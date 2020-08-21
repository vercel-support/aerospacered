import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'

//* JSX Containers
import Layout from "./containers/General/Layout/Layout";
import Header from "./containers/General/Header/Header";
import MobileHeader from './containers/General/MobileHeader/MobileHeader';
import Member from "./containers/Members/Member/Member";
import Landing from "./containers/General/Landing/Landing";
import MainContent from "./containers/Home/Main/MainContent";
import Projects from "./containers/Projects/Projects";
import AboutUs from "./containers/About_us/About_us";
import JoinUs from "./containers/Join_us/Join_us";
import Footer from "./containers/General/Footer/Footer";

//* CSS
//import classes from './assets/common/structure.module.css'
import './index.css';



class App extends Component {
  state = {
    showNavBar: false,
    showLanding: true,
    showPageTransition: false,
    showMobileMenu:false, 
  };

  componentDidMount() {
    if (
      !this.props.location.pathname === "/about_us" ||
      !this.props.location.pathname === "/join_us" ||
      !this.props.location.pathname === "/projects" ||
      !this.props.location.pathname === "/"
    ) {
      this.setState({ showNavBar: true });
    }
  }

  //TODO Navbar controller
  handleScroll = (e) => {
    let top = window.pageYOffset || document.documentElement.scrollTop;
    if (top > 350) {
      this.setState({ showNavBar: true });
    } else {
      this.setState({ showNavBar: false });
    };
  };

   //TODO MobileNavbar controller
   mobilePanel = () =>{
      this.setState({showMobileMenu: !this.state.showMobileMenu})
   }
   closeMobilePanel = () =>{
      this.setState({showMobileMenu: false})
   }

  PageHandler = ()=>{
    this.setState({showPageTransition: !this.state.showPageTransition});
  }


  render() {
    if (
      this.props.location.pathname === "/about_us" ||
      this.props.location.pathname === "/join_us" ||
      this.props.location.pathname === "/projects" ||
      this.props.location.pathname === "/"
    ) {
      var content = (
        <React.Fragment>
          <Header showNavBar={this.state.showNavBar} onScrollMethod={this.handleScroll}  />
          <Landing 
          onScrollMethod={this.handleScroll}
          closeMobilePanel={this.closeMobilePanel} />

          <Layout 
            onScrollMethod={this.handleScroll} 
            showNavBar={this.state.showNavBar} 
            closeMobilePanel={this.closeMobilePanel}>
              <Route path="/about_us" exact >
                {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={400}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <AboutUs />
                  </div>
                </CSSTransition>
              )}
              </Route>
              <Route path="/join_us" exact >
                {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={400}
                  classNames="page"
                  unmountOnExit
                  
                >
                  <div className="page">
                    <JoinUs />
                  </div>
                </CSSTransition>
              )}
              </Route>
              <Route path="/projects"  >
                {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={400}
                  classNames="page"
                  unmountOnExit
                  
                >
                  <div className="page">
                    <Projects />
                  </div>
                </CSSTransition>
              )}
              </Route>
              <Route path="/" exact >
                {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={400}
                  classNames="page"
                  unmountOnExit
                  
                >
                  <div className="page">
                  <MainContent showLogo={this.state.showNavBar} />
                  </div>
                </CSSTransition>
              )}
              </Route>
          </Layout>
        </React.Fragment>
      );
    } else {
      content = (
        <div>
          <Header showNavBar={true} />
          <Switch>
            <Route path="/Vicente_Coronel" exact component={Member} />
          </Switch>
        </div>
      );
    }
    return (
      <React.Fragment>
        {/* Header */}
        <MobileHeader 
          lateralMenu={this.state.showMobileMenu}
          panelController={this.mobilePanel} />
        {/* End Header */}

        {/* Page Transition */}



        {/* End Members */}
        {content}

        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
