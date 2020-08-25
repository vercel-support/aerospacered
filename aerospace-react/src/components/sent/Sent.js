import React, {useEffect, useRef} from "react";
import anime from "animejs/lib/anime.es.js";

//! https://github.com/juliangarnier/anime/
//* Containers
import classes from "./sent.module.css";

const Sent = (props) => {

    const lettersRef = useRef(null);
    const mlRef = useRef(null);
useEffect(() => {

    lettersRef.current.innerHTML = lettersRef.current.textContent.replace(
    /\S/g,
    "<span class='Letter' style='display: inline-block; line-height: 1;'>$&</span>"
    
  );

  
    // anime.timeline({ loop: false })
    // .add({
    //   targets: '.Ml6 .Letter',
    //   translateY: ["1.3em", 0],
    //   translateZ: 0,
    //   duration: 1000,
    //   delay: (el, i) => 50 * i,
    // })

  anime.timeline({loop: false})
  .add({
    targets: '.Ml14',
    opacity: [0,1],
    easing: "easeInOutExpo",
    duration:800,
  })
  .add({
    targets: '.Ml14 .Line',
    scaleX: [0,1],
    opacity: [0.25,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.Ml14 .Letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=400',
    delay: (el, i) => 150 + 25 * i
  });

},[props.sentVar]);

  return (
    <div className={classes.sentContainer} >
      <h3 class='Ml14' ref={mlRef} style={{position: 'relative', fontSize:'3.3em', opacity:0,}} >
        <span class='Text_wrapper' style={{position:'relative', display:'inline-block', padding: '0.2em 0.05em 0.1em 0px',overflow:'hidden',}}>
        <span class="Letters" ref={lettersRef}>{props.text}</span>
        <span class="Line" style={{opacity: 0,
  position: 'absolute',
  left: 0,
  height: '2px',
  width: '100%',
  backgroundColor: 'black',
  transformOrigin: '100% 100%',
  bottom: 0}}></span>
        </span>
      </h3>
    </div>
  );
};

export default Sent;
