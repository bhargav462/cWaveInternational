import React from 'react';
import Carousal from './Carousal/Carousal'
import Carousal2 from './Carousal2/Carousal'
import company1 from './../../Assets/redcarvings.jpg'
import company2 from './../../Assets/sfs.png'
import company3 from './../../Assets/dav.jpg'
import blur from './../../Assets/blur.jpg'

import classes from './Home.module.css'
import Slider from './Slider/Slider'

const Home = () => {
    return(
        <>
           <Carousal />
           <div className={classes["second-container"]}>
               <h1 className={classes["blue"]} >
                 We are a creative agency crafting elegant solutions for brands globally.
               </h1>
               <p className={classes["paragraph-content"]}>
                  With a diverse repertoire of digital expertise. We have worked across a range of mediums to deliver targeted, measurable results for companies like
               </p>
               <div className={classes["image-container"]}>
                    <div>
                        <img src={company1} style={{height: "100px",width: "100px",marginTop: '20px'}}/>
                    </div>
                    <div>
                        <img src={company2} style={{height: "100px",width: "100px",marginTop: '20px'}}/>
                    </div>
                    <div>
                        <img src={company3} style={{height: "100px",width: "100px",marginTop: '20px'}}/>
                    </div>
               </div>
           </div>
           <div className={classes["third-container"]}>
               <div className={classes["first"]}>
                    <p>Solutions for your digital needs.</p>
                    <p>We are an award winning design agency solving problems to produce intelligent designs.</p>
               </div>
               <div className={classes["items"]}>
                   <div className={classes["icon-content"]}>
                        <div className={classes["icon"]}>
                            <i class="fas fa-network-wired fa-2x"></i>
                        </div>
                        <div className={classes["branding"]}>
                            <h5 className={classes["h3"]}>Branding & Strategy</h5>
                            <p>How do your customers see you? How do you see yourself? We’re experts at deftly focusing, aligning and advancing perceptions.</p>
                        </div>
                   </div>

                    <div className={classes["icon-content"]}>
                        <div className={classes["icon"]}>
                            <i class="fas fa-search fa-2x"></i>
                        </div>

                        <div className={classes["social"]}>
                            <h5 className={classes["h3"]}>Social & Search</h5>
                            <p>The best brands are always looking for ways to engage customers and be found by them, in ways that no one could ever dream of.</p>
                        </div>
                    </div>

               </div>

               <div className={classes["items"]}>

                    <div className={classes["icon-content"]}>
                        <div className={classes["icon"]}>
                            <i class="fas fa-pen-fancy fa-2x"></i>    
                        </div>
                        
                        <div className={classes["design"]}>
                            <h5 className={classes["h3"]}>Design & Development</h5>
                            <p>The most impressive websites and app experiences embody vision, smart design and are backed by the right technology.</p>
                        </div>
                    </div>

                    <div className={classes["icon-content"]}>
                        <div className={classes["icon"]}>
                            <i class="fas fa-play fa-2x"></i>
                        </div>

                        <div className={classes["Stories"]}>
                            <h5 className={classes["h3"]}>Stories & Animation</h5>
                            <p>Because narrating stories and painting a picture for your customers could always do more than a thousand words ever could .</p>
                        </div>
                    </div>

               </div>
           </div>

           <div style={{background:`url(${blur})`,backgroundSize:'cover',height:'630px'}} className={classes["fourth-container"]}>
               <div style={{height:"100%"}}>
                    <div className={classes["box-container"]}>
                        <div className={classes["left-box"]}>
                           <div className={classes["left-box-text-container"]}>
                                <h3>Get Started !</h3>
                                <p>Ready to produce something of value ?</p>
                                <p>To create something you'd love ?</p>
                                <p>Look no further !</p>
                           </div>
                        </div>

                        <div className={classes["right-box"]}>
                            <div className={classes["right-box-text-container"]}>
                                <p>Questions or queries?</p>
                                <p style={{color:'#d2edf0',marginBottom:"32px",fontSize:"16px",paddingTop:'10px'}}>Get in touch !</p>
                                <div className={classes["button-container"]}>
                                    <button className={classes["buttons"]}>Start the Convo</button>
                                </div>
                            </div>
                        </div>    
                    </div>
               </div>
           </div>

           <div className={classes["fifth-container"]}>
               <Carousal2 />
           </div>

        </>
    )
}

export default Home;