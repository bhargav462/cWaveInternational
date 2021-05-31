import React, {useState,useEffect} from 'react';
import classes from './Slider.module.css'

const Slider = () => {

    let dotsStyles = [{display:"none"},{display:"none"},{display:"none"}]
    let slidesStyles = [{display:"none"},{display:"none"},{display:"none"}]
    let dotsClasses = ["","",""];

    const [slideIndex,setSlideIndex] = useState(-1);

    useEffect(async () => {
        if(slideIndex === -1)
        {
            setSlideIndex(1);
        }
    })

    function plusSlides(n) {
        showSlides(setSlideIndex(slideIndex + n));
    }
      
    function currentSlide(n) {
        showSlides(setSlideIndex(n));
    }

    function showSlides(n) {
        var i;
        // var slides = document.getElementsByClassName(classes["mySlides"]);
        // var dots = document.getElementsByClassName(classes["dot"]);
        console.log("mySlides",slidesStyles)
        let sI = slideIndex
        if (n > slidesStyles.length) {setSlideIndex(1); sI = 1}    
        if (n < 1) {setSlideIndex(slidesStyles.length); sI = slidesStyles.length}
    // for (i = 0; i < slidesStyles.length; i++) {
    //     slidesStyles[i].display = "none";  
    // }

        slidesStyles = slidesStyles.map(element => {
            return Object.assign({},element,{display:"none"})
        })

        for (i = 0; i < dotsClasses.length; i++) {
            dotsClasses[i] = "";
        }
    // dotsStyles[sI-1].display = "block";  
        dotsStyles = dotsStyles.map((element,index) => {
            console.log("check",`index ${index} si-1 ${sI-1}`)
            if(index === sI-1){
                console.log("check")
                return Object.assign({},element,{display:"block"})
            }
            return element
        })
        dotsClasses[sI-1] += " active";
    // dots[sI-1].className += " active";
    }

    useEffect(() => {
        console.log("slide Index",slideIndex)
        showSlides(1);
    },[slideIndex])

    return (<>
       <div className={classes["slideshow-container"]}>

            <div style={slidesStyles[0]} className={`${classes["mySlides"]} ${classes["fade"]}`}>
                <div className={classes["numbertext"]}>1 / 3</div>
                <p style={{width:"100%",height: '300px'}}>First</p>
                <div className={classes["text"]}>Caption Text</div>
            </div>

            <div style={slidesStyles[1]} className={`${classes["mySlides"]} ${classes["fade"]}`}>
                <div className={classes["numbertext"]}>2 / 3</div>
                <p style={{width:"100%",height: '300px'}}>Secong</p>
                <div className={classes["text"]}>Caption Two</div>
            </div>

            <div style={slidesStyles[2]} className={`${classes["mySlides"]} ${classes["fade"]}`}>
                <div className={classes["numbertext"]}>3 / 3</div>
                <p style={{width:"100%",height: '300px'}}>I am fine</p>
                <div className={classes["text"]}>Caption Three</div>
            </div>

            <a className={classes["prev"]} onClick={() => { plusSlides(-1) }}>&#10094;</a>
            <a className={classes["next"]} onClick={() => { plusSlides(1)  }}>&#10095;</a>
        </div>
        <div style={{textAlign:"center"}}>
            <span style={dotsStyles[0]} className={classes["dot"]} onClick={() => {currentSlide(1)}}></span> 
            <span style={dotsStyles[1]} className={classes["dot"]} onClick={() => {currentSlide(2)}}></span> 
            <span style={dotsStyles[2]} className={classes["dot"]} onClick={() => {currentSlide(3)}}></span> 
        </div>
    </>)
}

export default Slider;