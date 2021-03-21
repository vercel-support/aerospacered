import React, {useEffect} from "react";
import Polyglot from 'node-polyglot';
import {Helmet} from 'react-helmet';

//* CSS
import classes from "./Donations.module.css";


const Donations = (props) => {

  useEffect(() => {
    document.body.scrollTop = window.innerHeight-60; // For Safari
    document.documentElement.scrollTop = window.innerHeight-60;
    return () => {
        
    };
}, [props.hasChanged]);



 //TODO English version
 const phrasesEN = {
  locale: 'en',
  phrases: {
      'main.title':'Support us!',
      'main.subtitle': 'Donate equipment or resources',
      'main.body': 'La Red Ecuatoriana, como grupo de investigación y desarrollo independientes, obtiene los fondos para el desarrollo de sus proyectos por donaciones y aportaciones de miembros de la Red. Siendo los docentes y estudiantes de la ESPOCH los principales contribuyentes, y con los cuales estamos muy agradecidos, requerimos de un apoyo extra para finalizar la compra de varios sistemas y componentes cuyo precio sobrepasa la capacidad actual de la red. ',
      'main.body2': 'Esta situación nace de la imposibilidad de poner en marcha, por la pandemia global, los programas, eventos y torneos planteados para 2020 y 2021 que debían tener lugar en la ESPOCH y así financiar los proyectos mencionados en nuestro sitio web. ',
    
      'main.destination': '¿Qué se necesita?',
      'destination.body': 'Desde nuestra fundación, nos hemos enfocado en desarrollar el hardware y software que se usa en los drones desde 0 para generar el conocimiento respectivo. No obstante, hay ciertos elementos como sensores, estaciones de radio o microcontroladores que se requiere comprarlos. El dinero recaudado será utilizado íntegramente para adquirir estos bienes.',
  
      'main.use': '¿Qué pasará cuando el proyecto del dron termine?',
      'use.body': 'Al ser un grupo enfocado en la innovación, aplicaremos los conocimientos adquiridos en las diferentes áreas para sacar nuevas y mejores versiones partiendo de las experiencias generadas con este prototipo piloto. En estas futuras versiones también necesitaremos de hardware y demás elementos por lo que todos aquellos artículos adquiridos por la Red se guardan y ponen a disposición para otros proyectos a futuro o de un área diferente.',
  
  
      'main.howto': '¿Cómo y qué donar?',
      'howto.body': 'En esta página se encuentran los elementos que necesitamos a corto plazo para poner a funcionar nuestro primer prototipo. Para poder donar puede seleccionar alguno de los elementos restantes (se puede ver el artículo haciendo click) y comunicarse con nosotros mediante el siguiente número telefónico para coordinar la entrega. ',
      'main.members': 'Lista de artículos',
    
  }

}

//TODO Spanish version
const phrasesES = {
  locale: 'es',
  phrases: {
    'main.title': '¡Apoya el desarrollo!',
    'main.subtitle': 'Donaciones de equipo y recursos',
    'main.body': 'La Red Ecuatoriana, como grupo de investigación y desarrollo independientes, obtiene los fondos para el desarrollo de sus proyectos por donaciones y aportaciones de miembros de la Red. Siendo los docentes y estudiantes de la ESPOCH los principales contribuyentes, y con los cuales estamos muy agradecidos, requerimos de un apoyo extra para finalizar la compra de varios sistemas y componentes cuyo precio sobrepasa la capacidad actual de la red. ',
    'main.body2': 'Esta situación nace de la imposibilidad de poner en marcha, por la pandemia global, los programas, eventos y torneos planteados para 2020 y 2021 que debían tener lugar en la ESPOCH y así financiar los proyectos mencionados en nuestro sitio web. ',
  
    'main.destination': '¿Qué se necesita?',
    'destination.body': 'Desde nuestra fundación, nos hemos enfocado en desarrollar el hardware y software que se usa en los drones desde 0 para generar el conocimiento respectivo. No obstante, hay ciertos elementos como sensores, estaciones de radio o microcontroladores que se requiere comprarlos. El dinero recaudado será utilizado íntegramente para adquirir estos bienes.',

    'main.use': '¿Qué pasará cuando el proyecto del dron termine?',
    'use.body': 'Al ser un grupo enfocado en la innovación, aplicaremos los conocimientos adquiridos en las diferentes áreas para sacar nuevas y mejores versiones partiendo de las experiencias generadas con este prototipo piloto. En estas futuras versiones también necesitaremos de hardware y demás elementos por lo que todos aquellos artículos adquiridos por la Red se guardan y ponen a disposición para otros proyectos a futuro o de un área diferente.',


    'main.howto': '¿Cómo y qué donar?',
    'howto.body': 'En esta página se encuentran los elementos que necesitamos a corto plazo para poner a funcionar nuestro primer prototipo. Para poder donar puede seleccionar alguno de los elementos restantes (se puede ver el artículo haciendo click) y comunicarse con nosotros mediante el siguiente número telefónico para coordinar la entrega. ',
    'main.members': 'Lista de artículos',
}
}


const polyglotEN = new Polyglot(phrasesEN);
const polyglotES = new Polyglot(phrasesES);


  return (
    <React.Fragment> 
        <Helmet>
          <title>
            {(props.language === 'es') ? '¡Apoya el desarrollo! | Red Ecuatoriana Aeroespacial':'Support us! | Red Ecuatoriana Aeroespacial'}
          </title>
          <meta name="title" content="¡Apoya el desarrollo! | Red Ecuatoriana Aeroespacial"/>
          <meta name="description" content="Apoya a la Red Ecuatoriana Aeroespacial para lograr culminar el proyecto relacionado al diseño y construcción de un UAV mediante donaciones o la adquisición de cursos."/>
          <meta property="og:type" content="website"/>
<meta property="og:url" content="https://www.facebook.com/Aerospace.ec"/>
<meta property="og:title" content="Red Ecuatoriana Aeroespacial"/>
<meta property="og:description" content="La Red Ecuatoriana Aeroespacial fue fundada el 2019 y reconocida legalmente por la Senescyt en 2020. Desde entonces se ha trabajado arduamente en los proyectos planteados."/>
<link rel="icon" href="https://aerospaceec.pythonanywhere.com/static/img/REA_Logo.png" />

      
<link rel="canonical" href="http://www.redaeroespacial.com" />
<link rel="apple-touch-icon" href="https://aerospaceec.pythonanywhere.com/static/img/REA_Logo.png" />
  
    
        </Helmet>
              <div className={classes.AboutUs}>
              <h2>{(props.language === 'es') ? polyglotES.t('main.title'):polyglotEN.t('main.title')} </h2>

    <div className={classes.AboutUsContainer}>
      <div className={classes.AboutUsBody}>
        <h4>{(props.language === 'es') ? polyglotES.t('main.subtitle'):polyglotEN.t('main.subtitle')}  </h4>
        <p>{(props.language === 'es') ? polyglotES.t('main.body'):polyglotEN.t('main.body')} 

        <br/>
        {(props.language === 'es') ? polyglotES.t('main.body2'):polyglotEN.t('main.body2')} 

        </p>

        <h4>{(props.language === 'es') ? polyglotES.t('main.howto'):polyglotEN.t('main.howto')}  </h4>
        <p>
        {(props.language === 'es') ? polyglotES.t('howto.body'):polyglotEN.t('howto.body')}  
        <br/>
        <span> <img src='/call.svg' alt='Teléfono' className={classes.imgTelephone}/> 0995578644 - Vicente Coronel</span></p>
        
        <p>Además, ponemos también a disposición el número de cuenta bancaria de la Red al que se pueden hacer donaciones directas. Con el fin de reconocer el apoyo externo, nos gustaría compartir el nombre de nuestros donantes, en caso de querer que la donación sea anónima nos lo pueden indicar mediante el teléfono de contacto.
        <span>  <span className={classes.bankTag}> <img src='/wallet.svg' alt='Billetera'/>Banco Pichincha: </span> &nbsp; 2206394987 - Vicente Coronel Rojas - vicente.coronelr@gmail.com</span></p>
      </div>
    </div>

    <h4>{(props.language === 'es') ? polyglotES.t('main.members'):polyglotEN.t('main.members')} </h4>
        <div className={classes.ListaItemsWrapper}>
          <div className={classes.ListaItemsContainer}>
              <ul>
                <li></li>
                <li className={classes.completed}> <p>Motor Sunnysky x2814 - $29.99 |</p> <a href='https://sunnyskyusa.com/products/sunnysky-x2814-brushless-motors?variant=45672358991' rel="noopener noreferrer" target="_blank"> Adquirido </a> </li>
                <li className={classes.completed}> <p>Bateria 5000mAh - $49.99|</p><a href='https://www.amazon.com/HRB-Connector-Quadcopter-Helicopter-Airplane/dp/B06XKW4X6F' rel="noopener noreferrer" target="_blank"> Adquirido </a> </li>
                <li className={classes.completed}> <p>Hélice 9in - $3.95 |</p><a href='https://www.apcprop.com/product/9x6-5/' rel="noopener noreferrer" target="_blank"> Adquirido </a> </li>
                <li className={classes.completed}> <p>ESC 40 A - $19.89 |</p><a href='https://hobbyking.com/en_us/hobbyking-40a-2-6s-esc-w-ubec-4a.html?___store=en_us' rel="noopener noreferrer" target="_blank"> Adquirido</a> </li>
                <li className={classes.completed}> <p>RaspBerry Pi 4 - $91.42|</p><a href='https://www.amazon.es/Raspberry-PI-4B-8GB-RAM/dp/B0899VXM8F/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=raspberry+pi+4+4gb&qid=1616350584&sr=8-2' rel="noopener noreferrer" target="_blank"> Adquirido</a> </li>
                <li className={classes.completed}> <p>Arduino Uno - $24.99 |</p><a href='https://www.amazon.es/Arduino-UNO-A000066-microcontrolador-ATmega328/dp/B008GRTSV6/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=arduino+uno&qid=1616350610&sr=8-1' rel="noopener noreferrer" target="_blank"> Adquirido </a> </li>
                <li className={classes.completed}> <p>Servomotores 180deg - $9.32 |</p><a href='https://articulo.mercadolibre.com.ec/MEC-429160854-servo-motor-servomotor-sg90-_JM#position=1&type=item&tracking_id=6dd1e881-c9cd-4327-b46e-26b71bbe62f8' rel="noopener noreferrer" target="_blank"> Adquirido</a> </li>
                <li> <p>Control RC Flysky - $89.99 | &nbsp;</p><a href='https://grupoelectrostore.com/shop/radio-controles/flysky/rc-radio-control-flysky-fs-i6-6-canales-24ghz-con-receptor-fs-ia6b/' rel="noopener noreferrer" target="_blank"> Pendiente </a> </li>
                <li> <p>Sensor de presión para prototipado - $3.50 | &nbsp;</p><a href='https://articulo.mercadolibre.com.ec/MEC-429822274-sensor-de-presion-barometrica-arduino-bmp180-_JM#position=8&type=item&tracking_id=bbd32d83-f504-4c2d-b8f2-bcf8b7b08a33' rel="noopener noreferrer" target="_blank"> Pendiente</a> </li>
                <li> <p>Giroscopio para prototipado - $7.99 | &nbsp;</p><a href='https://articulo.mercadolibre.com.ec/MEC-429734553-modulo-giroscopio-acelerometro-mpu9250-gy-9250-arduino-_JM#position=3&type=item&tracking_id=0597812f-6026-4cae-be2e-7bdb35a4cc01' rel="noopener noreferrer" target="_blank"> Pendiente</a> </li>
                <li> <p>Cámara CMOS - $7.99 | &nbsp;</p><a href='https://articulo.mercadolibre.com.ec/MEC-430077022-modulo-camara-ov7670-arduino-precio-oferta-_JM#position=12&type=item&tracking_id=e92a012a-34a4-4137-8093-07cdfbc4e9eb' rel="noopener noreferrer" target="_blank"> Pendiente </a> </li>
                <li> <p>Planchas de espumaflex - $15.00 | &nbsp;</p>  Pendiente </li>
                <li> <p>Elementos elctrónicos varios - $5.00 | &nbsp;</p> Pendiente  </li>
                <li> <p>Impresión 3D y corte laser - $20.00 | &nbsp;</p> Pendiente  </li>

              </ul>
          </div>
          <div className={classes.progressContainer}>
          <ol className={classes.progressBar}>
    <li className={classes.isActive}><span>Motor x2814</span></li>  
    <li className={classes.isActive}> <span>Bateria HRB</span></li>  
    <li className={classes.isActive}><span>Hélice 9in</span></li>
    <li className={classes.isActive}><span>ESC 40A</span></li>  
    <li className={classes.isActive}><span>RaspBerry Pi 4</span></li>
    <li className={classes.isActive}><span>Arduino Uno</span></li>
    <li className={classes.isActive}><span>Servomotores </span></li>  
    <li><span>RC Flsky</span></li>
    <li><span>Barómetro</span></li>
    <li><span>Giroscopio</span></li>  
    <li><span>Cámara CMOS</span></li>  
    <li><span>Espumaflex</span></li>  
    <li><span>Electrónicos</span></li>  
    <li><span>Mecanizado 3D</span></li>  
  </ol>
          </div>
        </div>

        <h4>{(props.language === 'es') ? polyglotES.t('main.destination'):polyglotEN.t('main.destination')} </h4>
        <p>
        {(props.language === 'es') ? polyglotES.t('destination.body'):polyglotEN.t('destination.body')} 
        </p>


        <h4>Donadores</h4>
        <div className={classes.ListaItemsContainer}>

        <ul>
          <li> <p>Marco Guevara Granizo - $ ∞</p>  </li>
    
            </ul>

        </div>

        <h4>{(props.language === 'es') ? polyglotES.t('main.use'):polyglotEN.t('main.use')} </h4>
        <p>
        {(props.language === 'es') ? polyglotES.t('use.body'):polyglotEN.t('use.body')} 
        </p>
 
          </div>

   

    </React.Fragment>

  );
};
export default Donations;
