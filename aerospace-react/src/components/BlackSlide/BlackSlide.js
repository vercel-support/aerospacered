import React, { Component} from 'react';
import anime from 'animejs'
import Polyglot from "node-polyglot";


//* CSS
import classes from './BlackSlide.module.css';

//*Images
import LeftChevron from '../..//static/images/icons/chevronLeft.png';
import RightChevron from '../..//static/images/icons/chevronRight.png';

import Idea from '../..//static/images/icons/idea.svg';
import Hands from '../..//static/images/icons/hands.svg';
import Sketch from '../..//static/images/icons/sketch.svg';
import Carbon from '../..//static/images/icons/carbon.svg';
import Gear from '../..//static/images/icons/gears.svg';
import Propeller from '../..//static/images/icons/propeller.svg';
import New from '../..//static/images/icons/new.svg';

class BlackSlide extends Component{

    constructor(props){
        super(props);
        this.controllerRef = React.createRef();
        this.sectionRef = React.createRef();
        this.leftChevronRef = React.createRef();
        this.rightChevronRef = React.createRef();

        this.state={
            counts: 0,   
        }
    }
    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     };
    // }, [input]);

    moveLeft=()=>{

        if (this.state.counts > 0){
            this.leftChevronRef.current.style.backgroundColor = 'rgb(214, 29, 5)'
            let size = this.sectionRef.current.style.width;
            console.log(this.state.sectinoSize);
            let oldState = this.state.counts;
            this.setState({counts: oldState-1,});
            console.log(this.state.counts);
            anime.timeline({loop:false})
            .add({
                targets: this.controllerRef.current,
                translateX: (this.state.counts-1)*-200,
                duration:1500,
                easing: 'easeOutExpo',
            });
            this.rightChevronRef.current.style.backgroundColor = 'rgb(214, 29, 5)'

        }
        if (this.state.counts < 2){
            this.leftChevronRef.current.style.backgroundColor = '#212121'
            
        }

    }
    //! Upload this if a month is added 
    moveRight=()=>{
if(this.state.counts < 6){
    this.setState({counts: this.state.counts+1,});
    this.leftChevronRef.current.style.backgroundColor = 'rgb(214, 29, 5)'

    anime.timeline({loop:false})
    .add({
        targets: this.controllerRef.current,
        translateX: (this.state.counts+1)*-200,
        duration:1500,
        easing: 'easeOutExpo',
    })
}else{
    this.rightChevronRef.current.style.backgroundColor = '#212121'

}
    }
    render(){

        const phrasesEN = {
            locale: "en",
            phrases: {
                      
              'october19.title':'October',
              'october19.body': 'The aerospace group is created.',
   
              'november19.title':'November',
              'november19.body': 'Group\'s presentation to the Mechanical Faculty - ESPOCH ',

              'december19.title':'December',
              'december19.body': 'Group\'s union with the research group GIDETER ',

      
              'january20.title':'January',
              'january20.body': 'The project MD02 starts',
   
              'february20.title':'February',
              'february20.body': '',

              'march20.title':'March',
              'march20.body': 'Synthesis of high qualty graphene in the laboratory',

              'april20.title':'April',
              'april20.body': 'Optimizacion of the MD02 project',
              
              'may20.title':'May',
              'may20.body': 'Presentation of the UAV pre design project.',

              'june20.title':'June',
              'june20.body': 'The Team',

              'july20.title':'July',
              'july20.body': 'The Team',
            },
          };
      
          //TODO Spanish version
          const phrasesES = {
            locale: "es",
            phrases: {
                'october19.title':'Octubre',
                'october19.body': 'Creación del grupo Aeroespacial ',
     
                'november19.title':'Noviembre',
                'november19.body': 'Presentación del grupo a la Facultad de Mecánica - ESPOCH',
  
                'december19.title':'Diciembre',
                'december19.body': 'Unión al grupo de investigación GIDETER',
  
                'january20.title':'Enero',
                'january20.body': 'Comienzo del proyecto MD02',
     
                'february20.title':'Febrero',
                'february20.body': 'Reconocimiento como Red de desarrollo por la SENESCYT',
  
                'march20.title':'Marzo',
                'march20.body': 'Síntesis de grafeno de alta calidad en el laboratorio',
  
                'april20.title':'Abril',
                'april20.body': 'Optimización del proyecto MD02',
                
                'may20.title':'Mayo',
                'may20.body': 'Presentación del diseño preeliminar del UAV MD02',
  
                'june20.title':'Junio',
                'june20.body': '',
  
                'july20.title':'Julio',
                'july20.body': 'The Team',

            },
          };
      
          const polyglotEN = new Polyglot(phrasesEN);
          const polyglotES = new Polyglot(phrasesES);


    return (
        <React.Fragment>
        <div className={classes.BlackSlideContainer}>
            <img src={LeftChevron} ref={this.leftChevronRef} className={classes.LeftChevron} alt='Left side chevron' onClick={this.moveLeft}/>
            <img src={RightChevron} ref={this.rightChevronRef} className={classes.RightChevron} alt='Right side chevron' onClick={this.moveRight}/>
            <div className={classes.BlackSlideWrapper}>
                <div className={classes.SliderController} ref={this.controllerRef}>

            
                <div className={classes.nYear}>
                    <div className={classes.SectionsWrapper}>
                        <section ref={this.sectionRef}>
                            <h6>{
                                this.props.language === "es"
                                ? polyglotES.t("october19.title")
                                : polyglotEN.t("october19.title")} </h6>
                                <p> {        this.props.language === "es"
                                ? polyglotES.t("october19.body")
                                : polyglotEN.t("october19.body")} 
                                <img src={Idea} alt='Idea colored'/>

                                </p>

                        </section>
                        <section>
                            <h6>{        this.props.language === "es"
                                ? polyglotES.t("november19.title")
                                : polyglotEN.t("november19.title")}</h6>
                            <p>        {this.props.language === "es"
                                ? polyglotES.t("november19.body")
                                : polyglotEN.t("november19.body")}</p>
                        </section>
                        <section>
                            <h6>{        this.props.language === "es"
                                ? polyglotES.t("december19.title")
                                : polyglotEN.t("december19.title")}</h6>
                            <p>{   this.props.language === "es"
                                ? polyglotES.t("december19.body")
                                : polyglotEN.t("december19.body")}
                            <img src={Hands} alt='Handshake colored'/>

                                </p>
                        </section>  
                    </div>
                    <div className={classes.BottomWrapper}>
                        <h4>2019</h4>
                    </div>
                </div>
                <div className={classes.nYear}>
                    <div className={classes.SectionsWrapper}>
                        <section>
                            <h6>{        this.props.language === "es"
                                ? polyglotES.t("january20.title")
                                : polyglotEN.t("january20.title")} </h6>
                            <p>{        this.props.language === "es"
                                ? polyglotES.t("january20.body")
                                : polyglotEN.t("january20.body")} 
                                <img src={Sketch} alt='Sketch colored'/>    
                            </p>
                        </section>
                        <section>
                            <h6>{        this.props.language === "es"
                                ? polyglotES.t("february20.title")
                                : polyglotEN.t("february20.title")} </h6>
                            <p>{        this.props.language === "es"
                                ? polyglotES.t("february20.body")
                                : polyglotEN.t("february20.body")} 
                                <img src={New} alt='New start colored'/>        

                            </p>
                        </section>
                        <section>
                            <h6>{        this.props.language === "es"
                                ? polyglotES.t("march20.title")
                                : polyglotEN.t("march20.title")} </h6>
                            <p>{        this.props.language === "es"
                                ? polyglotES.t("march20.body")
                                : polyglotEN.t("march20.body")} 
                                <img src={Carbon} alt='Carbon non colored'/>        
                            </p>
                        </section> 
                        <section>
                            <h6>{        this.props.language === "es"
                                ? polyglotES.t("april20.title")
                                : polyglotEN.t("april20.title")} </h6>
                            <p>{        this.props.language === "es"
                                ? polyglotES.t("april20.body")
                                : polyglotEN.t("april20.body")} 
                                <img src={Gear} alt='Gear non colored'/>                                        
                            </p>
                        </section> 
                        <section>
                            <h6>{        this.props.language === "es"
                                ? polyglotES.t("may20.title")
                                : polyglotEN.t("may20.title")} </h6>
                            <p>{        this.props.language === "es"
                                ? polyglotES.t("may20.body")
                                : polyglotEN.t("may20.body")} 
                            <img src={Propeller} alt='Propeller non colored'/>
                            </p>
                        </section> 
                        <section>
                            <h6>{        this.props.language === "es"
                                ? polyglotES.t("june20.title")
                                : polyglotEN.t("june20.title")} </h6>
                            <p>{        this.props.language === "es"
                                ? polyglotES.t("june20.body")
                                : polyglotEN.t("june20.body")} </p>
                        </section> 
                    </div>
                    <div className={classes.BottomWrapper}>
                        <h4>2020</h4>
                    </div>
                </div>
                </div>
            </div>
        </div> 

        <div className={classes.MobileBlackSlideContainer}>
            <div className={classes.MobileBlackSlideWrapper}>

                <div className={classes.MobileSectionsWrapper}>
                    <div className={classes.firstYearWrapper}>
                    <h4 className={classes.firstyear}> 2019</h4>
                    <div className={classes.firstYear}>
                    <section>
                        <h6>{        this.props.language === "es"
                                ? polyglotES.t("october19.title")
                                : polyglotEN.t("october19.title")} </h6>
                            <p>{        this.props.language === "es"
                                ? polyglotES.t("october19.body")
                                : polyglotEN.t("october19.body")} </p> 
                    </section>
                    <section>
                        <h6>{        this.props.language === "es"
                                ? polyglotES.t("november19.title")
                                : polyglotEN.t("november19.title")} </h6>
                            <p>{        this.props.language === "es"
                                ? polyglotES.t("november19.body")
                                : polyglotEN.t("november19.body")} </p> 
                    </section>
                    <section>
                        <h6>{        this.props.language === "es"
                                ? polyglotES.t("december19.title")
                                : polyglotEN.t("december19.title")} </h6>
                            <p>{        this.props.language === "es"
                                ? polyglotES.t("december19.body")
                                : polyglotEN.t("december19.body")} </p> 
                    </section>


                    </div>
      
                    </div>

                    <div className={classes.firstYearWrapper}>
                    <h4> 2020</h4>
                    <div className={classes.firstYear}>
                    <section>
                        <h6>{        this.props.language === "es"
                                ? polyglotES.t("january20.title")
                                : polyglotEN.t("january20.title")} </h6>
                            <p>{        this.props.language === "es"
                                ? polyglotES.t("january20.body")
                                : polyglotEN.t("january20.body")} </p> 
                    </section>
                    <section>
                        <h6>{        this.props.language === "es"
                                ? polyglotES.t("february20.title")
                                : polyglotEN.t("february20.title")} </h6>
                            <p>{        this.props.language === "es"
                                ? polyglotES.t("february20.body")
                                : polyglotEN.t("february20.body")} </p> 
                    </section>
                    <section>
                        <h6>{        this.props.language === "es"
                                ? polyglotES.t("march20.title")
                                : polyglotEN.t("march20.title")} </h6>
                            <p>{        this.props.language === "es"
                                ? polyglotES.t("march20.body")
                                : polyglotEN.t("march20.body")} </p> 
                    </section>

                    <section>
                        <h6>{        this.props.language === "es"
                                ? polyglotES.t("april20.title")
                                : polyglotEN.t("april20.title")} </h6>
                            <p>{        this.props.language === "es"
                                ? polyglotES.t("april20.body")
                                : polyglotEN.t("april20.body")} </p> 
                    </section>
                    <section>
                        <h6>{        this.props.language === "es"
                                ? polyglotES.t("may20.title")
                                : polyglotEN.t("may20.title")} </h6>
                            <p>{        this.props.language === "es"
                                ? polyglotES.t("may20.body")
                                : polyglotEN.t("may20.body")} </p> 
                    </section>
                    <section>
                            <h6>{        this.props.language === "es"
                                ? polyglotES.t("june20.title")
                                : polyglotEN.t("june20.title")} </h6>
                            <p>{        this.props.language === "es"
                                ? polyglotES.t("june20.body")
                                : polyglotEN.t("june20.body")} </p>
                        </section> 
                    </div>
      
                    </div>
                   

                </div>
            </div>                                
        </div>
        </React.Fragment>

    );
    }

}

export default BlackSlide;


{/* <h4>2020</h4>
<section>
        <h6>{        this.props.language === "es"
            ? polyglotES.t("january20.title")
            : polyglotEN.t("january20.title")} </h6>
        <p>{        this.props.language === "es"
            ? polyglotES.t("january20.body")
            : polyglotEN.t("january20.body")} </p>
    </section>
    <section>
        <h6>{        this.props.language === "es"
            ? polyglotES.t("february20.title")
            : polyglotEN.t("february20.title")} </h6>
        <p>{        this.props.language === "es"
            ? polyglotES.t("february20.title")
            : polyglotEN.t("february20.title")} </p>
    </section>
    <section>
        <h6>{        this.props.language === "es"
            ? polyglotES.t("march20.title")
            : polyglotEN.t("march20.title")} </h6>
        <p>{        this.props.language === "es"
            ? polyglotES.t("march20.body")
            : polyglotEN.t("march20.body")} </p>
    </section> 
    <section>
        <h6>{        this.props.language === "es"
            ? polyglotES.t("april20.title")
            : polyglotEN.t("april20.title")} </h6>
        <p>{        this.props.language === "es"
            ? polyglotES.t("april20.body")
            : polyglotEN.t("april20.body")} </p>
    </section> 
    <section>
        <h6>{        this.props.language === "es"
            ? polyglotES.t("may20.title")
            : polyglotEN.t("may20.title")} </h6>
        <p>{        this.props.language === "es"
            ? polyglotES.t("may20.body")
            : polyglotEN.t("may20.body")} </p>
    </section> 
    <section>
        <h6>{        this.props.language === "es"
            ? polyglotES.t("june20.title")
            : polyglotEN.t("june20.title")} </h6>
        <p>{        this.props.language === "es"
            ? polyglotES.t("june20.body")
            : polyglotEN.t("june20.body")} </p>
    </section>  */}