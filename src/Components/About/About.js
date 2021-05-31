import React from 'react';
import classes from './About.module.css'
import pic1 from './../../Assets/4.jpg'

const About = () => {
    return(<div className={classes["container"]}>
        <div className={classes["first-container"]}>
            <hr style={{width:'30px',marginBottom:"24px"}}/>
            <h3>Helping companies thrive online.</h3>
            <p>We are an astute team of designers, developers, and analysts, all motivated by one common aspect - helping our clients achieve their targets and nurture their brand. We provide an aggregate solution to stamp your brand online.</p>
            <p>From website development , content management systems , logo designing, search engine optimization , poster creation , animated video development , VFX and online promotion , we deal with everything you need to exert your authority on the interwebs.</p>
            <p>Want to know about how we got started ?</p>
        </div>

        <div className={classes["second-container"]}>
            <div className={classes["left"]}>
                <h1>Why do our clients love us.</h1>
                <h3>At cWaveInternational, teamwork inspires artwork.</h3>
                <p>cWaveInternational is a seasoned, passionate and curious group of designers, developers, animators, writers and digital marketers, facing challenges together and celebrating creativity. With a culture of collaboration, a roster of talent and a bit of lunacy to top it all off , the cWaveInternational team is endlessly focussed on creating designs that , in the end , do one thing - satisfy you .We are perennially focussed on the next big thing , and how we can use it for your gain .</p>
            </div>

            <div className={classes["right"]}>
               <div className={classes["icon-content"]}>
                   <div className={classes["icon"]}>
                        <i class="fas fa-box-open fa-3x"></i>
                   </div>
                   <div className={classes["content"]}>
                       <h2>Leaving the box behind</h2>
                       <p>Why think out of the box ? Why even have a box to begin with ? We explore a plethora of possibilities to get you what you really deserve. Every time.</p>
                   </div>
               </div>

               <div className={classes["icon-content"]}>
                   <div className={classes["icon"]}>
                        <i class="fas fa-sync fa-3x"></i>
                   </div>
                   <div className={classes["content"]}>
                       <h2>Ceaseless Communication</h2>
                       <p>We believe words weave magic into our works. We love knowing what you have to say during every step of the process. We're irritating that way.</p>
                   </div>
               </div>

               <div className={classes["icon-content"]}>
                   <div className={classes["icon"]}>
                        <i class="fas fa-gift fa-3x"></i>
                   </div>
                   <div className={classes["content"]}>
                       <h2>Satisfaction, delivered.</h2>
                       <p>We don’t know what straying away from a deadline means. Our team ensures your work is always delivered before the promised date. Always.</p>
                   </div>
               </div>
            </div>
        </div>

        <div className={classes["third-container"]}>
            <div className={classes["left"]}>
                <h1>What to expect from us ?</h1>
                <p>
                When you hire us, you’re hiring a team of opinionated, passionate designers, developers and conceptual producers. Even though we talk a lot about strategy, process and approach , everything we do is rooted in a deep necessity to produce something of value. To execute. To create something you'd love. We’re not looking for customers every day, and we’re not driven by profits either. We pursue our passion by creating something we admire, and that means an honest and straightforward collaboration.
                </p>
            </div>

            <div className={classes["right"]}>
                 <h1>So, are we a match?</h1>
                 <p>
                 You’ve noticed, right ? We have an eclectic mix of clients and industries. That’s because our design skills work equally well across the broad spectrum, and because we believe that the best collaborations happen between people who understand each other and share a common set of values and goals. So far, our clients have come from a very myriad spectrum of fields - each more daunting than the previous. But that’s just our track record. Feel free to challenge us with something new. We're always up for it.
                 </p>
            </div>
        </div>

        <div className={classes["fourth-container"]}>
            <div className={classes["left"]}>
                <div className={classes["image-container"]}>
                    <img src={pic1} className={classes["profilePic"]} />
                </div>
                <h1>Hari</h1>
                <h3>Manager</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                </p>
            </div>

            <div className={classes["right"]}>
                <div className={classes["image-container"]}>
                    <img src={pic1} className={classes["profilePic"]} />
                </div>
                <h1>Bhargav</h1>
                <h3>Coder</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                </p>
            </div>
        </div>

    </div>)
}

export default About;