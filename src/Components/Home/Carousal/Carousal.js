import React, { Component } from 'react';
import classes from './Carousal.module.css';
import land1 from './../../../Assets/background1.jpg'

class Corousal extends Component{

    state = {
        x: 0,
        crop: [land1,land1],
        farmer: null,
        data:{
            h1:["Please Don't Hire Us","We Build What Users Need"],
            h3:["IF YOU LOOKING FOR ORDINARY","NOT WHAT YOU THINK YOUR USERS NEED"]
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.goLeft()
        }, 4000);
    }

    goLeft = () => {
       this.setState((preProps) => {
        if(preProps.x === 0)
        {
            return {x:-100*(this.state.crop.length-1)}
        }else{
            return {x:preProps.x+100}
        }
       })
    }

    goRight = () => {
        // console.log(this.state.x);
        this.setState((preProps) => {
            if(preProps.x === -100*(this.state.crop.length-1))
            {
                return {x:0}
            }else{
                return {x:preProps.x-100}
            }
        })
    }

   render() {
       return (
           <>
                <div className={classes.slider}>
                    {
                        this.state.crop.map((item,index) => {
                            // console.log("index",index)
                            return (
                                <div key={index} className={classes.slide}
                                     style={{transform:`translateX(${this.state.x}%)`}}>
                                    <div style={{backgroundImage:`url(${item})`,backgroundRepeat: 'no-repeat',backgroundSize:'cover',backgroundPosition:'center',height: '500px'}} className={classes.imageStyles}>
                                        <h1 className={classes["h1"]}>{this.state.data.h1[index]}</h1>
                                        <h3 className={classes["h3"]}>{this.state.data.h3[index]}</h3>
                                        <div className={classes["button-container"]}>
                                            <button className={classes["buttons"]}>About US</button>
                                            <button className={classes["buttons"]}>Contact Us</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <button className={classes.goLeft} onClick={this.goLeft}>
                        <i class="fas fa-chevron-left" style={{fontSize:'2vw',fontWeight:'bold'}}></i>
                    </button>
                    <button className={classes.goRight} onClick={this.goRight}>
                        <i class="fas fa-chevron-right" style={{fontSize:'2vw',fontWeight:'bold'}}></i>
                    </button>
                </div>
            </>
       );
   }
}

export default Corousal;