import React, { useEffect,useRef } from 'react';
import anime from "animejs/lib/anime.es.js";


//* Containers
import classes from './Landing.module.css';

const Landing = (props) => {

    const firstLineRef = useRef(null);
    const lastLineRef = useRef(null);
    const firstLineRefback = useRef(null);
    const lastLineRefback = useRef(null);

    useEffect(() => {
        //TODO Fordwards text
        anime.timeline({loop:false})

        .add({
            targets: firstLineRef.current,
            translateX: [100, 200],
            opacity:[1, 0],
            delay:1500,
            duration: 3500,
            easing: 'easeOutBack',
        });
        anime.timeline({loop:false})
        .add({
            targets: lastLineRef.current,
            translateX: [0, -500],
            scale:[1, 1.4],
            opacity:[1, 0],
            delay:1500,
            duration: 4500,
            easing: 'easeOutBack'
        });

        return () => {

        };    }, [props.hasChanged]);
    //TODO Left text animnation

useEffect(() => {
            //TODO Backwards text
            anime.timeline({loop:false})
            .add({
                targets: firstLineRefback.current,
                translateY: [-150, 50],
                opacity:[0, 1],
                duration: 2000,
                easing: 'easeOutBack',
                delay:4000
            });
            anime.timeline({loop:false})
            .add({
                targets: lastLineRefback.current,
                translateY: [-150, 20],
                opacity:[0, 1],
                delay:4000,
                duration: 2500,
                easing: 'easeOutBack'
            });
    return () => { };
}, [props.hasChanged]);


    
        return (

            <div 
            onClick={props.closeMobilePanel}
            onWheelCapture={props.onScrollMethod} 
            onKeyDownCapture={props.onScrollMethod}
            tabIndex='-1'
            >
                <div  className={classes.LandingBackground}>
                    <div className={classes.arrow}  >
                        <div className={classes.arrow_top}></div>
                        <div className={classes.arrow_bottom}></div>
                    </div>
                </div>
                <h6 className={classes.LeftCornerText}> <div className={classes.textContainer}><span ref={firstLineRef} className={classes.firstline}> THE FUTURE </span> <span ref={lastLineRef} className={classes.secondline} style={{transform:'translateY(20px)',}}>IS NOW!</span></div></h6>
                <h6 className={classes.LeftCornerText}> <div className={classes.textContainer}><span ref={firstLineRefback} className={classes.firstlineback}> Update this </span> <br/> <span ref={lastLineRefback} className={classes.secondlineback}  >Update this too</span></div></h6>

               

                {(window.innerWidth < 500) ?  
                <span className={classes.RightCornerText} >Photo by <a href="https://unsplash.com/@jdiegoph?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Diego PH</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
                :                 <span className={classes.RightCornerText} >Photo by <a href="https://unsplash.com/@asoggetti?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">asoggetti</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
}
            </div>

        );
    

}


export default Landing;