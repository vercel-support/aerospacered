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
                    title={project.title}
                    start_date={project.start_date}
                    body={project.body} 
                    img_url={project.img}
                    coordinator={project.coordinator}
                    state={project.state}
                    partners={project.partners}
                    key={project.index}
                    />
        });


        if (this.state.loading){
            projects = <div>
                <Spinner /> 
                <Spinner /> 
                <Spinner /> 
                
                </div>;
        }
    return(
        <div className={classes.ProjectsContainer}>
            <h2>Proyectos </h2>

                {projects}

        </div>

    )
    }
}
export default Projects;