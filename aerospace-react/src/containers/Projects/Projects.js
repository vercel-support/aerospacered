import React, {Component} from 'react';
import axios from 'axios';

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
        axios.get('https://127.0.1.1:8000/api/projects/')
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
        <div className={classes.ProjectsContainer}>
            <h2>{(this.props.language === 'es') ? 'Proyectos':'Projects'} </h2>

                {projects}

        </div>

    )
    }
}
export default Projects;