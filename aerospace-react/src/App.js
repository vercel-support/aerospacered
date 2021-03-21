import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'
import axios from 'axios';
import {Helmet} from 'react-helmet';

//* JSX Containers
import Layout from "./containers/General/Layout/Layout";
import Header from "./containers/General/Header/Header";
import MobileHeader from './containers/General/MobileHeader/MobileHeader';
import Member from "./containers/Members/Member/Member";
import Landing from "./containers/General/Landing/Landing";
import MainContent from "./containers/Home/Main/MainContent";
import Projects from "./containers/Projects/Projects";
import AboutUs from "./containers/About_us/About_us";
import Donations from "./containers/Donations/Donations";
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
    hasChanged: false,
    language: 'es',
    languageHasChanged: false,
    requestLoading: true,
    member_list: [],
    

  };
  
  componentDidMount() {
    if (
      !this.props.location.pathname === "/about_us" ||
      !this.props.location.pathname === "/join_us" ||
      !this.props.location.pathname === "/projects" ||
      !this.props.location.pathname === "/donations" ||
      !this.props.location.pathname === "/"
    ) {
      this.setState({ showNavBar: true });
    }

    axios.get('https://aerospaceEC.pythonanywhere.com/api/member_list/')
        .then(response => {
            this.setState({member_list: response.data});
            
        });
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
  switchToHome = () =>{
    this.setState({showNavBar:false});
  }

  //TODO Reset scroll when scroll downs
  switchPage = ()=>{
    this.setState({ hasChanged: !this.state.hasChanged });
    this.setState({ showNavBar: true });
  }

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

  //TODO Language controller
  switchLanguage = (e) =>{
    e.preventDefault();
    this.setState({languageHasChanged: !this.state.languageHasChanged});
    if (this.state.language === 'en') {
      this.setState({language: 'es'})
    }else{
      this.setState({language: 'en'})
    };
  }


  render() {


 
    let memberComponents = ''
    
    if (
      this.props.location.pathname === "/about_us" ||
      this.props.location.pathname === "/join_us" ||
      this.props.location.pathname === "/projects" ||
      this.props.location.pathname === "/donations" ||
      this.props.location.pathname === "/"
    ) {
      var content = (
        <React.Fragment>
          <Header 
            showNavBar={this.state.showNavBar} 
            onScrollMethod={this.handleScroll}  
            switchPage={this.switchPage}
            language={this.state.language}
            switchLanguage = {this.switchLanguage} 
            languageHasChanged={this.state.languageHasChanged}
            switchToHome={this.switchToHome}/>
          <Landing 
          onScrollMethod={this.handleScroll}
          closeMobilePanel={this.closeMobilePanel}
          language={this.state.language} 
          hasChanged={this.state.hasChanged}
          />

          <Layout 
            onScrollMethod={this.handleScroll} 
            showNavBar={this.state.showNavBar} 
            closeMobilePanel={this.closeMobilePanel}
            >
              <Route path="/about_us" exact >
                {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={400}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <AboutUs hasChanged={this.state.hasChanged} language={this.state.language} />
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
                    <JoinUs hasChanged={this.state.hasChanged} language={this.state.language} />
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
                    <Projects hasChanged={this.state.hasChanged} language={this.state.language} />
                  </div>
                </CSSTransition>
              )}
              </Route>
              <Route path="/donations"  >
                {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={400}
                  classNames="page"
                  unmountOnExit
                  
                >
                  <div className="page">
                    <Donations hasChanged={this.state.hasChanged} language={this.state.language} />
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
                  <MainContent showLogo={this.state.showNavBar} hasChanged={this.state.hasChanged} language={this.state.language} />
                  </div>
                </CSSTransition>
              )}
              </Route>
          </Layout>
        </React.Fragment>
      );
    } else {
      
      memberComponents = this.state.member_list.map(memberUser =>{
        return <Route path={'/'+memberUser.member_link} component={Member} key={memberUser.name} />
      })
      
        content = (
        <div>
          <Header showNavBar={true} />
          <Switch>

            {memberComponents}
          
          </Switch>
        </div>
      )
      
    }
    return (
      <React.Fragment>
        {/* Header */}
        <Helmet>
          <meta property="og:type" content="website"/>
<meta name="title" content="¡Apoya el desarrollo! | Red Ecuatoriana Aeroespacial"/>
<link rel="icon" href="https://aerospaceec.pythonanywhere.com/static/img/REA_Logo.png" />

<meta property="og:type" content="website"/>
<meta property="og:url" content="https://www.facebook.com/Aerospace.ec"/>
<meta property="og:title" content="Red Ecuatoriana Aeroespacial"/>
<meta property="og:description" content="La Red Ecuatoriana Aeroespacial fue fundada el 2019 y reconocida legalmente por la Senescyt en 2020. Desde entonces se ha trabajado arduamente en los proyectos planteados."/>

      
<link rel="canonical" href="http://www.redaeroespacial.com" />
<link rel="apple-touch-icon" href="https://aerospaceec.pythonanywhere.com/static/img/REA_Logo.png" />
  
    
      
        </Helmet>


        <MobileHeader 
          lateralMenu={this.state.showMobileMenu}
          panelController={this.mobilePanel} 
          language={this.state.language}
          switchLanguage = {this.switchLanguage} />
        {/* End Header */}

        {/* Page Transition */}



        {/* End Members */}
        {content}

        <Footer language={this.state.language} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
