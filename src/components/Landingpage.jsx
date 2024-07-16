import "../Styles/Landingpage.css";
import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { GrGithub } from "react-icons/gr";
import { TbBrandGmail } from "react-icons/tb";
import { Link } from "react-router-dom";

let Landingpage = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="icons">
          <h2>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <AiOutlineLinkedin />
            </a>
          </h2>
          <h2>
            <a href="https://github.com/AakashKumarAK" target="_blank" rel="noopener noreferrer">
              <GrGithub />
            </a>
          </h2>
          <h2>
            <a href="mailto:aakashkumar897340@gmail.com">
              <TbBrandGmail />
            </a>
          </h2>
        </div>
        <h3 className="portfolio">
          Portfolio<span className="dot">.</span>
        </h3>
        <ul>
          <li><Link className="link" to="/about">About</Link></li>
          <li><Link className="link" to="/projects">Projects</Link></li>
          <li><Link className="link" to="/skills">Skills</Link></li>
          <li><a className="link" href="/resume.pdf" download="AakashKumar_Resume.pdf">Resume</a></li>
        </ul>
      </div>
      <div className="intro">
        <h1>
          I'm Aakash Kumar <br />
          <span>A Full Stack Developer...</span>
        </h1>
        <h5>"Turning ideas into reality from front to back"</h5>
        <Link to="/contact">
          <button className="contactButton">
            Get in Touch
            <div className="iconButton">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </Link>
      </div>
      <div>
        <img className="desimg" src="https://www.careerguide.com/career/wp-content/uploads/2020/03/full-stack-development.gif" alt="Full Stack Development" />
      </div>
    </div>
  );
};

export default Landingpage;
