import React, {Component} from 'react';
import axios from 'axios';
import {Helmet} from 'react-helmet';


import Project from './Project/Project';
import Spinner from '../../components/spinner/spinner';
//* CSS 
import classes from './Projects.module.css';

class Projects extends Component{
    state ={
        projects: [],
        loading: true
    }

    
    componentDidMount(){
        document.body.scrollTop = window.innerHeight-60; // For Safari
        document.documentElement.scrollTop = window.innerHeight-60;
        this.setState({loading: true});
        axios.get('https://aerospaceEC.pythonanywhere.com/api/projects/')
            .then(response => {
                
                this.setState({projects: response.data});
                
            })
            .then( response =>{
                this.setState({loading:false });
            })
            .catch(error => {
                this.setState({loading:true});
            })

        
    }
    render(){

        let projects = this.state.projects.map(project =>{
            
            return <Project 
                    titleES={project.titleES}
                    titleEN={project.titleEN}
                    start_date={project.start_date}
                    bodyES={project.bodyES} 
                    bodyEN={project.bodyEN} 
                    img_url={project.img}
                    coordinator={project.coordinator}
                    stateES={project.stateES}
                    stateEN={project.stateEN}
                    partners={project.partners}
                    key={project.index}
                    language={this.props.language}
                    />
        });


        if (this.state.loading){
            projects = <div>
                <Spinner /> 
                <br/>
                <Spinner /> 
                <br/>
                <Spinner /> 
                
                </div>;
        }
    return(
        <React.Fragment> 
        <Helmet>
          <title>
                {(this.props.language === 'es') ? 'Proyectos | Red Ecuatoriana Aeroespacial':'Projects | Red Ecuatoriana Aeroespacial'}
          </title>
      
          <meta property="og:type" content="website"/>
        <meta name="title" content="Proyectos | Red Ecuatoriana Aeroespacial"/>
        <meta name="description" content="Aeroespacial, robótica y nanomateriales son las áreas generales de trabajo. Entre nuestros proyectos están varios tipos de UAV y fabricación de aleaciones con grafeno."/>
        <link rel="icon" href="https://aerospaceec.pythonanywhere.com/static/img/REA_Logo.png" />

        <meta property="og:type" content="website"/>
<meta property="og:url" content="https://www.facebook.com/Aerospace.ec"/>
<meta property="og:title" content="Red Ecuatoriana Aeroespacial"/>
<meta property="og:description" content="La Red Ecuatoriana Aeroespacial fue fundada el 2019 y reconocida legalmente por la Senescyt en 2020. Desde entonces se ha trabajado arduamente en los proyectos planteados."/>

      
<link rel="canonical" href="http://www.redaeroespacial.com" />
<link rel="apple-touch-icon" href="https://aerospaceec.pythonanywhere.com/static/img/REA_Logo.png" />
  
    
        
        </Helmet>
        <div className={classes.ProjectsContainer}>
            <h2>{(this.props.language === 'es') ? 'Proyectos':'Projects'} </h2>

                {projects}

        </div>
        </React.Fragment> 
    )
    }
}
export default Projects;