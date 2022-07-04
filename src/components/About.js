import React, { Component } from "react";
//import './App.css';

export default class About extends Component {
render() {
let resumeData = this.props.resumeData;
return (
    <section id="about">
        <div className="row">
            <div className="three columns">
                <img className="profile-pic" src="images/portfolio/profile-pic.jpeg" alt=""/>
            </div>
            <div className="nine columns main-col">
                <h2 className="text-left">About Me</h2>
                <p className='text-left'>{resumeData.aboutme1}</p>
                <p className='text-left'>{resumeData.aboutme2}</p>
                <p className='text-left'>{resumeData.aboutme3}</p>
                <p className='text-left'>{resumeData.aboutme4}</p>
                <p className='text-left'>{resumeData.aboutme5}</p>
                <p className='text-left'>{resumeData.aboutme6}</p>                
            </div>
        </div>
    </section>
)
}
}
