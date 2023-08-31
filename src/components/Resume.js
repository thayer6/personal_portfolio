import React, { Component } from "react";
export default class Resume extends Component{
    render(){
        let resumeData = this.props.resumeData;
        return(
            <section id="resume">

                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Full-Time Roles</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {resumeData.work && resumeData.work.map((item)=>{
                            return(
                                <div className="row item">
                                    <div className="twelve columns">
                                        <h3>{item.CompanyName}</h3>
                                        <p className="info">
                                            {item.specialization}
                                            <span>&bull;</span><em className="info">{item.StartDate} - {item.EndDate}</em>
                                        </p>
                                        <ul>
                                            <li className="descript">{item.Achievement1}</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Part-Time Roles</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {resumeData.additionalWork && resumeData.additionalWork.map((item)=>{
                            return(
                                <div className="row item">
                                    <div className="twelve columns">
                                        <h3>{item.name}</h3>
                                        <p className="info">
                                            {item.title}
                                            <a href={item.link}>{item.extrainfo}</a>
                                        </p>
                                        <p className="descript">
                                            {item.descript}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <ul className="skills">
                            {resumeData.skills && resumeData.skills.map((item)=>{
                                return(
                                    <div className="row item">
                                    <div className="twelve columns">
                                    {/*<img src={`${item.imgurl}`} className="skill-thumbnail" alt=""/>*/}
                                        <h3>{item.skillname}</h3>
                                        <p className="descript">
                                            {item.skilldescript}
                                        </p>
                                    </div>
                                    </div>

                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {resumeData.education && resumeData.education.map((item)=>{
                            return(
                                <div className="row item">
                                    <div className="twelve columns">
                                        <h3>{item.UniversityName}</h3>
                                        <p className="info">
                                            {item.specialization}
                                            <span>&bull;</span><em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em>
                                        </p>
                                        <br></br>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}
