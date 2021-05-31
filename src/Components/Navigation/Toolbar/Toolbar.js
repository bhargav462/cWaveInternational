import React, { useState, useEffect } from 'react';
import classes from './Toolbar.module.css';

function Toolbar(props){

  const [hamburger,setHamburger] = useState(true);

   const hamburgerHandler = (e) => {
     console.log("hamburger click",e)
     setHamburger(!hamburger)
   }


        return(
              <div className={classes["header"]}>
                    <div className={classes["container"]}>
                        <input type="checkbox" name="" className={classes["check"]} />
                        
                        <div className={classes["logo-container"]}>
                            {/* <img src={Logo} className={classes["logoImage"]}></img> */}
                            <h1 className={classes["logo"]}>CWaveInternational</h1>
                            {/* <h1 className={classes["tagline"]}></h1> */}
                        </div>

                        <div className={classes["nav-btn"]}>
                            <div className={classes["nav-links"]}>
                                <ul className={classes["ul"]} onClick={hamburgerHandler}>
                                    <li className={classes["nav-link"]}>
                                        <a href="/" className={classes['a']}>Home</a>
                                    </li>
                                    
                                    <li className={classes["nav-link"]} >
                                        <a className={classes["a"]} href="/products">Our Approach</a>
                                    </li>

                                    <li className={classes["nav-link"]} >
                                        <a className={classes["a"]} href="/about">About Us</a>
                                    </li>
                                    
                                    <li className={classes["nav-link"]} >
                                        <a className={classes["a"]} href="/about">Services</a>
                                    </li>
                                    
                                    <li className={classes["nav-link"]} >
                                        <a className={classes["a"]} href="/contact">Works</a>
                                    </li>

                                    <li className={classes["nav-link"]} >
                                        <a className={classes["a"]} href="/contact">Contact</a>
                                    </li>

                                    <li className={classes["nav-link"]} >
                                        <a className={classes["a"]} href="/contact">Request Quote</a>
                                    </li>
                                </ul>
                            </div>

                     
                        </div>

                        <div className={classes["hamburger-menu-container"]}>
                            <div className={classes["hamburger-menu"]} onClick={hamburgerHandler}>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
        )
}

export default Toolbar;