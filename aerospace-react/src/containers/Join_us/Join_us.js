import React, {Component} from "react";
import axios from 'axios';


import Spinner from '../../components/spinner/spinner';

//* CSS
import classes from "./Join_us.module.css";

//* PDF
import REA_Estatutos from '../../static/documents/REA - Estatutos.pdf';
import REA_Equipos from '../../static/documents/REA - Equipos.pdf';

//* Icons
import Avatar from '../../static/images/icons/avatar.svg'
import Mail from '../../static/images/icons/mail.svg'
import Team from '../../static/images/icons/gear.svg'
import University from '../../static/images/icons/university.svg'


class JoinUs extends Component{
  state ={
    loading: true,

    name: '',
    subject: 'REA | Solicitud de ingreso',
    description: '',
    area: '',
    college: '',
    mail:''
    
  }

  formHandler=(event)=>{
    event.preventDefault();
    this.setState({loading:true});

    const data = {...this.state};
    console.log(data);
    axios.post('https://127.0.1.1:8000/api/join_us/', data)
  }


  onNameChange = e=>{
    this.setState({name: e.target.value});
    console.log(this.state)
  };
  onDescriptionChange = e=>{
    this.setState({description: e.target.value});
  };
  onAreaChange = e=>{
    this.setState({area: e.target.value});
  };
  onMailChange= e=>{
    this.setState({mail: e.target.value});
  }
  onCollegeChange = e => {
    this.setState({college: e.target.value});
  }


  render(){






    let form_section =             
      <form onSubmit={this.formHandler} className={classes.FormContainer}>

        <div className={classes.NameContainer}>
        <label htmlFor='id'><img src={Avatar} alt='avatar icon' /></label>
        <input name='name' placeholder='Ingrese su nombre' onChange={this.onNameChange} required/>

        </div>

        <div className={classes.TeamContainer}>
        <label htmlFor='area'><img src={Team} alt='team icon' /></label>
        <select name='team' onChange={this.onAreaChange}>
          <option value='Aeroespacial'> Aeroespacial</option>
          <option value='Robótica'>  Robótica</option>
          <option value='YouTube'> YouTube</option>
          <option value='Materiales'> Materiales</option>
          <option value='Karting'> Karting</option>
        </select>
        </div>

        <div className={classes.CollegeContainer}>
        <label htmlFor='college'><img src={University} alt='mail icon' /></label>
        <input name='college' placeholder='Ingrese su institución' onChange={this.onCollegeChange} required/>

        </div>
        <div className={classes.MailContainer}>
          <label htmlFor="email"><img src={Mail} alt='mail icon' /></label>
          <input type="email" id="email" name="email" placeholder='Ingrese su correo electrónico' onChange={this.onMailChange}/> 
      
        </div>
        
        <div className={classes.CommentsContainer}>
       
        <textarea placeholder='¿Cuál es la razón por la que desea ingresar?' onChange={this.onDescriptionChange} required/>

        </div>


        <button className={classes.SendButton}> <h3>Enviar</h3> </button>

      </form>;

    if(!this.state.loading){
      form_section = <Spinner/>
    }

  return (
    <div className={classes.JoinUs}>
      <h2>Inscripcioones </h2>

      <div className={classes.JoinUsContainer}>
        <div className={classes.JoinUsBody}>

        <div>
            <h4>El Equipo</h4>
            <p>
            Los miembros que conforman la Red Ecuatoriana Aeroespacial desempeñan el rol de docentes, profesores e investigadores. Trabajando desde
            varias universidades de Ecuador, colaboran de forma activa en el desarrollo de los proyectos. Si te interesa participar, ¡puedes echarle un vistazo
            a nuestros equipos de trabajo y ponerte en contacto con nosotros!
            </p>
            <h5>Disciplinas: <a href={REA_Equipos} download>Equipos</a></h5>
          </div>

          <div>
            <h4>Requisitios</h4>
            <p>
              Cualquier persona puede formar parte de la Red. ¡Valoramos cualquier interés en promover el desarrollo de la aeronáutica en el país! No obstante,
              para poder colaborar de forma activa es necesario mostrar aptitudes en el área ingenieril, electrónica, agronomía o telecomunicacciones. Si te interesa
              la generación de contenido, puedes trabajar con nosotros en el sector de diseño gráfico o producción y edición de videos.
            </p>
          </div>

          <div>
            <h4>Normativa</h4>
            <p>
              Todos los miembros pertenecientes a la Red deben estar de acuerdo con los estatutos que la rigen. Además, trabajamos para el desarrollo 
              de las actividades en un entorno de cordialida y respetuo múto. 
            </p>
            <h5>Documentaci'on: <a href={REA_Estatutos} download>Estatutos</a></h5>
          </div>

          <div>
            <h4>Formulario</h4>
            <p>
              Y bien, ¿deseas formar parte de este ambicioso proyecto? Mediante el siguiente formulario puedes ponerte en contacto con nosotros
              una vez recibamos tu solicitud nos pondremos en contacto para una breve entrevista y una presentación formal de los proyectos.  
            </p>

            {form_section}
          
          </div>
        </div>
        <div className={classes.JoinUsBanner}></div>
      </div>
    </div>
  );
  }
};
export default JoinUs;
