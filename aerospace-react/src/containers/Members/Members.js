import React, { Component } from 'react';
import axios from 'axios';

//* CSS
import classes from './Members.module.css';
//* Components
import MemberPortrait from './MemberPortrait/MemberPortrait'
import Spinner from '../../components/spinner/spinner';


class Members extends Component{
    state ={
        members:[],
        loading:true,

    }

    componentDidMount(){
       
        axios.get('https://127.0.1.1:8000/api/members/')
            .then(response => {    
                this.setState({members: response.data});              
            })
            .then( response =>{
                this.setState({loading:false });
            })
            .catch(error => {
                this.setState({loading:true});
            })

        
    }


    render(){

        let members = this.state.members.map(member =>{
            return <MemberPortrait 
                    name={member.name}
                    rolES={member.rolES}
                    rolEN={member.rolEN}
                    member_link={member.member_link} 
                    img_url = {member.img}
                    key={member.index}
                    language={this.props.language}
                    />
        });
        
        if(this.state.loading){
            members = <Spinner/>
        }

        return(
            <div className={classes.MembersGalleryWrapper}>

                <div className={classes.Gallery}>

                    {members}                    

                </div>
            </div>
        )

        
    }

}
export default Members;