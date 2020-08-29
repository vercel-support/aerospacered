import React, { Component } from "react";
import axios from "axios";
import Polyglot from "node-polyglot";
import {Helmet} from 'react-helmet';


import Spinner from "../../components/spinner/spinner";
import Sent from "../../components/sent/Sent";

//* CSS
import classes from "./Join_us.module.css";

//* PDF
import REA_Estatutos from "../../static/documents/REA - Estatutos.pdf";
import REA_Equipos from "../../static/documents/REA - Equipos.pdf";

//* Icons
import Avatar from "../../static/images/icons/avatar.svg";
import Mail from "../../static/images/icons/mail.svg";
import Team from "../../static/images/icons/gear.svg";
import University from "../../static/images/icons/university.svg";

class JoinUs extends Component {
  state = {
    loading: false,
    sent: false,

    name: "",
    subject: "REA | Solicitud de ingreso",
    description: "",
    area: "Aeroespacial",
    college: "",
    mail: "",
  };

  formHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });

    const data = { ...this.state };
    axios
      .post("https://127.0.1.1:8000/api/join_us/", data)
      .then(this.setState({ loading: true }))
      .then((response) => {
        if (response.status === 200) {
          this.setState({ sent: true });
        }
      })
      .catch((error) => {
        this.setState({ loading: true });
      });
  };

  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  onDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };
  onAreaChange = (e) => {
    this.setState({ area: e.target.value });
  };
  onMailChange = (e) => {
    this.setState({ mail: e.target.value });
  };
  onCollegeChange = (e) => {
    this.setState({ college: e.target.value });
  };

  componentDidMount() {
    document.body.scrollTop = window.innerHeight - 60; // For Safari
    document.documentElement.scrollTop = window.innerHeight - 60;
  }

  render() {
    //TODO English version
    const phrasesEN = {
      locale: "en",
      phrases: {

        'main.title':'Join us!',
        'main.team': 'The Team',
        'team.body': 'The members that make up the Ecuadorian Aerospace Network play the role of teachers, professors and researchers. Working from various universities in Ecuador, they actively collaborate in the development of projects. If you are interested in participating, you can take a look at our work teams and get in touch with us!' ,
        'main.requirements': 'What are we looking for?',
        'requirements.body':'Anyone can join the Network. We value any interest in promoting the development of aeronautics in the country! However, to be able to collaborate actively it is necessary to show skills in the engineering, electronics, agronomy or telecommunications areas. If you are interested in content generation, you can work with us in the field of graphic design or video production and editing.',

        'main.policies':'Policies',
        'main.form': 'Form',

        'team.disciplines': 'Fields: ',
        'team.teams': 'Teams',

        'policies.documentation': 'Documentation: ',
        'policies.body': 'All members belonging to the Network must agree with the statutes that govern it. In addition, we work for the development of activities in a cordial and respectful environment.',
        'policies.regulations': 'Regulations',

        'form.body':'Well, do you want to be part of this ambitious project? Using the following form you can contact us once we receive your request we will contact you for a brief interview and a formal presentation of the projects.',


        "form.name": "Name",
        "form.college": "University Name",
        "form.email": "E-mail address",
        "form.comment": "Why do you want to join us? Take it easy :)",
        "options.Aeroespacial": "Aerospace",
        "options.Karting": "Karting",
        "options.YouTube": "YouTube",
        "options.Materials": "Materiales",
        "options.Robotics": "Robotics",
        "form.button": "Send",
        'form.sent':'Request sent!',


      },
    };

    //TODO Spanish version
    const phrasesES = {
      locale: "es",
      phrases: {
        'main.title':'¡Únete!',
        'main.team': 'El Equipo',
        'team.body': 'Los miembros que conforman la Red Ecuatoriana Aeroespacial desempeñan el rol de docentes, profesores e investigadores. Trabajando desde varias universidades de Ecuador, colaboran de forma activa en el desarrollo de los proyectos. Si te interesa participar, ¡puedes echarle un vistazo a nuestros equipos de trabajo y ponerte en contacto con nosotros!' ,
        'main.requirements': '¿Qué buscamos?',
        'requirements.body':'Cualquier persona puede formar parte de la Red. ¡Valoramos cualquier interés en promover el desarrollo de la aeronáutica en el país! No obstante, para poder colaborar de forma activa es necesario mostrar aptitudes en el área ingenieril, electrónica, agronomía o telecomunicacciones. Si te interesa la generación de contenido, puedes trabajar con nosotros en el sector de diseño gráfico o producción y edición de videos.' ,


        
        'main.policies':'Normativas',
        'main.form': 'Formulario',


        'team.disciplines': 'Áreas: ',
        'team.teams': 'Equipos',

        'policies.documentation': 'Documentación: ',
        'policies.body': 'Todos los miembros pertenecientes a la Red deben estar de acuerdo con los estatutos que la rigen. Además, trabajamos para el desarrollo de las actividades en un entorno de cordialida y respetuo múto.',

        'policies.regulations': 'Estatutos',

        'form.body':'Y bien, ¿deseas formar parte de este ambicioso proyecto? Mediante el siguiente formulario puedes ponerte en contacto con nosotros una vez recibamos tu solicitud nos pondremos en contacto para una breve entrevista y una presentación formal de los proyectos.',


        "form.name": "Nombre y apellidos",
        "form.college": "Institución Educativa",
        "form.email": "Correo electrónico",
        "form.comment": "¿Cuál es la razón por la que desea ingresar?",
        "options.Aeroespacial": "Aeroespacial",
        "options.Karting": "Karting",
        "options.YouTube": "YouTube",
        "options.Materials": "Materiales",
        "options.Robotics": "Robótica",
        "form.button": "Enviar",
        'form.sent': '¡Solicitud enviada!',
      },
    };

    const polyglotEN = new Polyglot(phrasesEN);
    const polyglotES = new Polyglot(phrasesES);

    let form_section = (
      <form onSubmit={this.formHandler} className={classes.FormContainer}>
        <div className={classes.NameContainer}>
          <label htmlFor="id">
            <img src={Avatar} alt="avatar icon" />
          </label>
          <input
            name="name"
            placeholder={
              this.props.language === "es"
                ? polyglotES.t("form.name")
                : polyglotEN.t("form.name")
            }
            onChange={this.onNameChange}
            required
          />
        </div>

        <div className={classes.TeamContainer}>
          <label htmlFor="area">
            <img src={Team} alt="team icon" />
          </label>
          <select name="team" onChange={this.onAreaChange}>
            <option
              value={
                this.props.language === "es"
                  ? polyglotES.t("options.Aeroespacial")
                  : polyglotEN.t("options.Aeroespacial")
              }
            >
              {this.props.language === "es"
                ? polyglotES.t("options.Aeroespacial")
                : polyglotEN.t("options.Aeroespacial")}
            </option>
            <option
              value={
                this.props.language === "es"
                  ? polyglotES.t("options.Robotics")
                  : polyglotEN.t("options.Robotics")
              }
            >
              {this.props.language === "es"
                ? polyglotES.t("options.Robotics")
                : polyglotEN.t("options.Robotics")}
            </option>
            <option
              value={
                this.props.language === "es"
                  ? polyglotES.t("options.YouTube")
                  : polyglotEN.t("options.YouTube")
              }
            >
            {
                this.props.language === "es"
                  ? polyglotES.t("options.YouTube")
                  : polyglotEN.t("options.YouTube")
              }
            </option>
            <option
              value={
                this.props.language === "es"
                  ? polyglotES.t("options.Materials")
                  : polyglotEN.t("options.Materials")
              }
            >
 {
                this.props.language === "es"
                  ? polyglotES.t("options.Materials")
                  : polyglotEN.t("options.Materials")
              }
            </option>
            <option
              value={
                this.props.language === "es"
                  ? polyglotES.t("options.Karting")
                  : polyglotEN.t("options.Karting")
              }
            >
{
            this.props.language === "es"
                  ? polyglotES.t("options.Karting")
                  : polyglotEN.t("options.Karting")
              }
            </option>
          </select>
        </div>

        <div className={classes.CollegeContainer}>
          <label htmlFor="college">
            <img src={University} alt="mail icon" />
          </label>
          <input
            name="college"
            placeholder={
              this.props.language === "es"
                ? polyglotES.t("form.college")
                : polyglotEN.t("form.college")
            }
            onChange={this.onCollegeChange}
            required
          />
        </div>
        <div className={classes.MailContainer}>
          <label htmlFor="email">
            <img src={Mail} alt="mail icon" />
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={
              this.props.language === "es"
                ? polyglotES.t("form.email")
                : polyglotEN.t("form.email")
            }
            onChange={this.onMailChange}
          />
        </div>

        <div className={classes.CommentsContainer}>
          <textarea
            placeholder={
              this.props.language === "es"
                ? polyglotES.t("form.comment")
                : polyglotEN.t("form.comment")
            }
            onChange={this.onDescriptionChange}
            required
          />
        </div>

        <button className={classes.SendButton}>
          <h3>{
              this.props.language === "es"
                ? polyglotES.t("form.button")
                : polyglotEN.t("form.button")
            }</h3>
        </button>
      </form>
    );

    if (this.state.loading) {
      form_section = <Spinner />;
    }
    if (this.state.sent) {
      form_section = (
        <div className={classes.SentWrapper}>
          <Sent text={
              this.props.language === "es"
                ? polyglotES.t("form.sent")
                : polyglotEN.t("form.sent")
            } sentVar={this.state.sent} />
        </div>
      );
    }

    return (
      <React.Fragment> 
      <Helmet>
        <title>
          {(this.props.language === 'es') ? '¡Únete! | Red Ecuatoriana Aeroespacial':'Join us | Red Ecuatoriana Aeroespacial'}
            </title>
        
        <meta name="description" content="¡Únete a la Red Ecuatoriana Aeroespacial! Este ambicioso proyecto requiere de la colaboración de docentes, investigadores y estudiantes pertenecientes a diferentes áreas."/>
        <meta property="og:type" content="website"/>
      </Helmet>
      <div className={classes.JoinUs}>
        <h2>{
              this.props.language === "es"
                ? polyglotES.t("main.title")
                : polyglotEN.t("main.title")
            } </h2>

        <div className={classes.JoinUsContainer}>
          <div className={classes.JoinUsBody}>
            <div>
              <h4>{
              this.props.language === "es"
                ? polyglotES.t("main.team")
                : polyglotEN.t("main.team")
            }</h4>
              <p>
              {
              this.props.language === "es"
                ? polyglotES.t("team.body")
                : polyglotEN.t("team.body")
            }
              
              </p>
              <h5>
              {
              this.props.language === "es"
                ? polyglotES.t("team.disciplines")
                : polyglotEN.t("team.disciplines")
            }
                <a href={REA_Equipos} download>
                {
              this.props.language === "es"
                ? polyglotES.t("team.teams")
                : polyglotEN.t("team.teams")
            }
                </a>
              </h5>
            </div>
            <div>
              <h4>{
              this.props.language === "es"
                ? polyglotES.t("main.requirements")
                : polyglotEN.t("main.requirements")
            }</h4>
              <p>
              {
              this.props.language === "es"
                ? polyglotES.t("requirements.body")
                : polyglotEN.t("requirements.body")
            }
              </p>
            </div>

            <div>
              <h4>{
              this.props.language === "es"
                ? polyglotES.t("main.policies")
                : polyglotEN.t("main.policies")
            }</h4>
              <p>
              {
              this.props.language === "es"
                ? polyglotES.t("policies.body")
                : polyglotEN.t("policies.body")
            }
              </p>
              <h5>
              {
              this.props.language === "es"
                ? polyglotES.t("policies.documentation")
                : polyglotEN.t("policies.documentation")
            }
                <a href={REA_Estatutos} download>
                {
              this.props.language === "es"
                ? polyglotES.t("policies.regulations")
                : polyglotEN.t("policies.regulations")
            }
                </a>
              </h5>
            </div>

            <div>
              <h4>{
              this.props.language === "es"
                ? polyglotES.t("main.form")
                : polyglotEN.t("main.form")
            }</h4>
              <p>
              {
              this.props.language === "es"
                ? polyglotES.t("form.body")
                : polyglotEN.t("form.body")
            }
              </p>
              <div className={classes.FormWrapper}>{form_section}</div>
            </div>
          </div>
          <div className={classes.JoinUsBanner}></div>
         
        </div>
        
      </div>
      </React.Fragment> 
    );
  }
}
export default JoinUs;
