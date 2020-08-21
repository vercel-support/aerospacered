import React, {Component} from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom';

//* CSS
import classes from "./Member.module.css";

//*Images 
import rg from '../../../static/images/media/rg.svg';
import tw from '../../../static/images/media/tw.svg';
import bideas from '../../../static/images/media/bideas.png';

class Member extends Component{

  state = {
    loading:true,
    member:{},

  };
  // componentDidMount(){
  //   axios.get('https://127.0.1.1:8000/api/member/'+ )
  //   .then(response => {    
  //       this.setState({members: response.data});              
  //   })
  //   .then( response =>{
  //       this.setState({loading:false });
  //   })
  //   .catch(error => {
  //       this.setState({loading:true});
  //   })
  // }
  

  componentDidMount(){
    

    axios.get('https://127.0.1.1:8000/api/member/' + this.props.location.pathname.substr(1))
    .then(response => {    
        this.setState({member: response.data});    
                  
    })
    .then( response =>{
        this.setState({loading:false });
        
    })
    .catch(error => {
        this.setState({loading:true});
    })
    
    
  }

  render(){
  
  return (
    <div className={classes.MemberContainer}>


    <div className={classes.ContentWrapper}>

      <div className={classes.ProfileInfo}>

      <div className={classes.FirstLine}>
        <h1 className={classes.Name}> {this.state.member.name}</h1>
        <h2> {this.state.member.college} </h2>
      </div>

        
        <p className={classes.PersonalInformation}>
       {this.state.member.description}
        </p>

        <div className={classes.PersonalInformationList}>
          <h5><b>Random Fact</b>: {this.state.member.random_fact}</h5>
          <h5><b>Rol:</b> {this.state.member.rol}</h5>
          <h5><b>Ingreso:</b> {this.state.member.legion}</h5>
          <h5><b>Correo</b>: <a href={this.state.member.mail} > {this.state.member.mail} </a></h5>
        </div>
      
      </div>
      <div className={classes.leftWrapper}>
        <img src={'https://127.0.1.1:8000'+this.state.member.img} className={classes.Portrait} alt={this.state.member.name}/>
        <div className={classes.MediaWrapper}>
          <a href={this.state.member.research_link}><img src={rg} alt='ResearchGate link'/></a>
          <a href={this.state.member.twitter_link}><img className={classes.tws}  src={tw} alt='Twitter link'/></a>
          <a href={this.state.member.banco_ideas_link}><img src={bideas} alt='Banco de Ideas link'/></a>
        </div>
    </div>
    </div>
      
    </div>
  );
  }
};
export default withRouter(Member);