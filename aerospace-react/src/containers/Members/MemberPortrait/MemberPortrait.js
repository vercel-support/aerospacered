import React from 'react';

//* CSS
import classes from './MemberPortrait.module.css';


const MemberPortrait = (props) => {
    let img_url = 'https://127.0.1.1:8000'+props.img_url;
    const member_link = '/'+ props.member_link;
    
    return (
        <div className={classes.MemberSpace}>
        <a href={member_link}>
        <div className={classes.MememberText}> 
            <h5> {props.name} </h5>
            <h6> {props.rol}</h6>
        </div>
        <img src={img_url} alt={props.name}/>
        </a>
    </div>
    )


}


export default MemberPortrait;