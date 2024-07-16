import React from 'react';
import '../Styles/About.css';
import img from '../Resources/1000054342.jpg';
const About = () => {
  return (
    <div className='container'>
      <div className='about'>
        <img src={img} alt="About Me" />
        <div>
          <h3>About Me</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, praesentium incidunt labore id sint nesciunt sequi? Neque voluptatem quos ullam voluptates provident, sapiente a iure sed, doloremque placeat quas fugit?</p>
        </div>
      </div>
    </div>
  );
};

export default About;
