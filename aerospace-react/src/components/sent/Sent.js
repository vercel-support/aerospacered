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

  
    anime.timeline({ loop: false })
    .add({
      targets: '.Ml6 .Letter',
      translateY: ["1.3em", 0],
      translateZ: 0,
      duration: 1000,
      delay: (el, i) => 50 * i,
    })

},[props.sentVar]);

  return (
    <div className={classes.sentContainer} >
      <h3 class='Ml6' ref={mlRef} style={{position: 'relative', fontSize:'3.3em'}} >
        <span class='Text_wrapper' style={{position:'relative', display:'inline-block', padding: '0.2em 0.05em 0.1em 0px',overflow:'hidden',}}>
        <span class='Letters' ref={lettersRef}> {" "} {props.text} {" "}</span>
        </span>
      </h3>
    </div>
  );
};

export default Sent;
