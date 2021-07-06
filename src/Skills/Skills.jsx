import React from 'react'
import './skills.css'
import "../App.css"
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProfessionalSkillsData from './ProfessionalSkillsData'
import SoftSkillData from './SoftSkillsData'
// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "./ChangingProgressProvider";
const Skills = () => {
    const percentage = 66;
    return (
        <>
            <section className="sections" id="skills">
                <h1 className="title">Skills</h1>

                <div className="main-content">
                    <div className="professional-skills">
                        {
                            ProfessionalSkillsData.map((skill, index) => {
                                return (
                                    <>
                                        <li key={index}>
                                            <h3>{skill.title}</h3>
                                            <span className="bar">
                                                <span className={skill.cName}></span>
                                            </span>
                                        </li>
                                    </>
                                )
                            })
                        }


                    </div>
                    <div className="soft-skills">
                        {/* Communication Progress Bar */}
                        <div className="circle-progress-bar">
                            <AnimatedProgressProvider
                                valueStart={0}
                                valueEnd={80}
                                duration={3}
                                easingFunction={easeQuadInOut}

                            >
                                {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbar
                                            value={value}
                                            text={`${roundedValue}%`}
                                            /* This is important to include, because if you're fully managing the
                                      animation yourself, you'll want to disable the CSS animation. */
                                      styles={buildStyles({ 
                                        pathTransition: "none",
                                        pathColor: `crimson`,
                                        textColor: 'White',
                                        trailColor: 'white',
                                        backgroundColor: '#23263A',})}
                                        />
                                    );
                                }}
                            </AnimatedProgressProvider>
                            <h1 className="circle-progress-bar-h1" >Communication </h1>
                        </div>
                        {/* Team Work circle-progress-bar */}
                        <div className="circle-progress-bar">
                            <AnimatedProgressProvider
                                valueStart={0}
                                valueEnd={85}
                                duration={3}
                                easingFunction={easeQuadInOut}

                            >
                                {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbar
                                            value={value}
                                            text={`${roundedValue}%`}
                                            /* This is important to include, because if you're fully managing the
                                      animation yourself, you'll want to disable the CSS animation. */
                                      styles={buildStyles({ 
                                        pathTransition: "none",
                                        pathColor: `crimson`,
                                        textColor: 'White',
                                        trailColor: 'white',
                                        backgroundColor: '#23263A',})}
                                        />
                                    );
                                }}
                            </AnimatedProgressProvider>
                            <h1 className="circle-progress-bar-h1">Team Work </h1>
                        </div>
                        {/* Project Management circle-progress-bar */}
                        <div className="circle-progress-bar">
                            <AnimatedProgressProvider
                                valueStart={0}
                                valueEnd={77}
                                duration={3}
                                easingFunction={easeQuadInOut}

                            >
                                {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbar
                                            value={value}
                                            text={`${roundedValue}%`}
                                            /* This is important to include, because if you're fully managing the
                                      animation yourself, you'll want to disable the CSS animation. */
                                            styles={buildStyles({ 
                                                pathTransition: "none",
                                                pathColor: `crimson`,
                                                textColor: 'White',
                                                trailColor: 'white',
                                                backgroundColor: '#23263A',})}
                                        />
                                    );
                                }}
                            </AnimatedProgressProvider>
                            <h1 className="circle-progress-bar-h1">Project Management </h1>
                        </div>
                        {/* Project Management circle-progress-bar */}
                        <div className="circle-progress-bar">
                            <AnimatedProgressProvider
                                valueStart={0}
                                valueEnd={87}
                                duration={3}
                                easingFunction={easeQuadInOut}

                            >
                                {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbar
                                            value={value}
                                            text={`${roundedValue}%`}
                                            /* This is important to include, because if you're fully managing the
                                      animation yourself, you'll want to disable the CSS animation. */
                                      styles={buildStyles({ 
                                        pathTransition: "none",
                                        pathColor: `crimson`,
                                        textColor: 'White',
                                        trailColor: 'white',
                                        backgroundColor: '#23263A',})}
                                        />
                                    );
                                }}
                            </AnimatedProgressProvider>
                            <h1 className="circle-progress-bar-h1">Creativity </h1>
                        </div>
                    </div>
                </div>








                {/* <h1>{softSkill.title}</h1> */}















            </section>

        </>
    )
}
export default Skills










{/* <div className="soft-skills">
{
    SoftSkillData.map((softSkill, index) => {
        return (
            <>
                <div class="circle-wrap" id={softSkill.circleWrapIdName}>
                    <div class="circle" id={softSkill.circleIdName}>
                        <div class="mask full" id={softSkill.maskFullIdname}>
                            <div class="fill" id={softSkill.fillIdName}></div>
                        </div>
                        <div class="mask half" id={softSkill.maskFullIdname}>
                            <div class="fill" id={softSkill.fillIdName}></div>
                        </div>
                        <div class="inside-circle"> {softSkill.width} </div>
                    </div>
                    <h1 className="soft-skill-title">{softSkill.title}</h1>
                </div>  </>

        )
    })
}

</div> */}