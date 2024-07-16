import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { FaJava, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import '../Styles/Skills.css';

const skills = [
    { name: "Java", level: 90, icon: <FaJava className="skill-icon" /> },
    { name: "SQL", level: 100, icon: <FaDatabase className="skill-icon" /> },
    { name: "HTML", level: 100, icon: <FaHtml5 className="skill-icon" /> },
    { name: "CSS", level: 100, icon: <FaCss3Alt className="skill-icon" /> },
    { name: "JavaScript", level: 100, icon: <FaJs className="skill-icon" /> },
    { name: "ReactJS", level: 100, icon: <FaReact className="skill-icon" /> },
    { name: "Spring Boot", level: 70, icon: <SiSpringboot className="skill-icon" /> },
];

const Skills = () => {
    const animationProps = useSpring({
        from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
        to: { opacity: 1, transform: "translate3d(0,0px,0)" },
        config: { duration: 500 },
        delay: 200,
    });

    return (
        <div className="skills-container">
            <h2 className="skills-title">Skills</h2>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <animated.li key={index} style={animationProps} className="skill-item">
                        {skill.icon}
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-level">
                            <div
                                className="skill-level-bar"
                                style={{
                                    width: `${skill.level}%`,
                                    backgroundColor: skill.level > 75 ? "#4caf50" : "#ff9800",
                                }}
                            ></div>
                        </div>
                    </animated.li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
