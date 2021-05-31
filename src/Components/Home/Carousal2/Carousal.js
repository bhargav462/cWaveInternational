import React, { Component } from 'react';
import classes from './Carousal.module.css';

class Corousal extends Component{

    state = {
        x: 0,
        data:{
            h1:["No Bullshit !!! Kickass & Quality Work!!! Beyond Expectations!! All the best!!!",
                "We loved working with Crazyheads. We had a deadline to meet in 4 days, getting the entire video done with the concept, voicing and animations seemed to be impossible but CrazyHeads made it happen. They also accommodated all our edit requests and were prompt at every stage.",
                "Whether you want to create a new website for your business or redesigning your current site, you can’t go wrong if you choose CrazyHeads to do the job. Creativity at its best ! Good job."
            ],
            h3:["ISHAN PADGOTRA, FAREYE.",
                "SOURABH DEORAH. CEO, WORK ADVANTAGE.",
                "MR TARA PRASAD, PRESIDENT, SAFE ROADS FOUNDATION"]
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
            return {x:-100*(this.state.data.h1.length-1)}
        }else{
            return {x:preProps.x+100}
        }
       })
    }

    goRight = () => {
        // console.log(this.state.x);
        this.setState((preProps) => {
            if(preProps.x === -100*(this.state.data.h1.length-1))
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
                        this.state.data.h1.map((item,index) => {
                            // console.log("index",index)
                            return (
                                <div key={index} className={classes.slide}
                                     style={{transform:`translateX(${this.state.x}%)`}}>
                                    <div style={{backgroundColor: "#3eabb8",height: '500px'}} className={classes.imageStyles}>
                                        <h1 className={classes["h1"]}>{this.state.data.h1[index]}</h1>
                                        <h3 className={classes["h3"]}>{this.state.data.h3[index]}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <button className={classes.goLeft} onClick={this.goLeft}>
                        <i class="fas fa-chevron-left" style={{fontSize:'2vw',fontWeight:'bold',color:'white'}}></i>
                    </button>
                    <button className={classes.goRight} onClick={this.goRight}>
                        <i class="fas fa-chevron-right" style={{fontSize:'2vw',fontWeight:'bold',color:'white'}}></i>
                    </button>
                </div>
            </>
       );
   }
}

export default Corousal;