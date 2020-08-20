import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'

//* JSX Containers
import Layout from "./containers/General/Layout/Layout";
import Header from "./containers/General/Header/Header";
import Member from "./containers/Members/Member/Member";
import Landing from "./containers/General/Landing/Landing";
import MainContent from "./containers/Home/Main/MainContent";
import Projects from "./containers/Projects/Projects";
import AboutUs from "./containers/About_us/About_us";
import JoinUs from "./containers/Join_us/Join_us";
import Footer from "./containers/General/Footer/Footer";

import PageTransition from "./hoc/PageTransition/PageTransition";
//* CSS
//import classes from './assets/common/structure.module.css'
import './index.css';
import Spinner from "./components/spinner/spinner";



class App extends Component {
  state = {
    showNavBar: false,
    showLanding: true,
    showPageTransition: false,
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
          <Header showNavBar={this.state.showNavBar} />
          <Landing onScrollMethod={this.handleScroll} />

          <Layout onScrollMethod={this.handleScroll} showNavBar={this.state.showNavBar} >
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
        <Layout>
          <Header showNavBar={true} />
          <Switch>
            <Route path="/Vicente_Coronel" exact component={Member} />
          </Switch>
        </Layout>
      );
    }
    return (
      <React.Fragment>
        {/* Header */}

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
