import React from 'react'
import './about.css';
import ME from '../../assets/about-me.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { BiCheck } from 'react-icons/bi';
import Skills from '../header/skills';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about_me">
          <div className="about__me-image">
            <img src={ ME } alt="About Image" />
            
          </div>
         </div>
         <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward  className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers  className='about__icon'/>
              <h5>Clients</h5>
              <small>500+ Over Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary  className='about__icon'/>
              <h5>Projects</h5>
              <small>6+ Completed</small>
          </article>
          </div>  
          <p>
            Full-Stack Web Application Developer (MERN Stack):
            <ul>
              <li> 
             <p><strong><BiCheck className='service__list-icon' />Full-Stack Web Development: Proficient in both front-end and back-end development, utilizing the MERN (MongoDB, Express.js, React, Node.js) stack.</strong></p>

              </li>
              <li> 
             <p><strong><BiCheck className='service__list-icon' />Front-End Technologies: Skilled in HTML, CSS, and JavaScript, with the ability to build interactive user interfaces using React and Redux for state management.</strong></p>

              </li>
              <li> 
             <p><strong><BiCheck className='service__list-icon' />Back-End Development: Experienced in server-side logic and building RESTful APIs using Node.js and Express.js.</strong></p>

              </li>

              <li> 
             <p><strong><BiCheck className='service__list-icon' />Database Management: Proficient in MySQL for efficient data storage and retrieval.</strong></p>

              </li>

              <li> 
             <p><strong><BiCheck className='service__list-icon' />Strong Educational Background: Graduated from the Ethiopian Defence University with a degree in Computer Engineering in 2023.</strong></p>

              </li>
              <li> 
             <p><strong><BiCheck className='service__list-icon' />Creative Problem Solving: Emphasize on progressive enhancement and utilizing unlimited creativity to optimize resources.</strong></p>

              </li>
              <li> 
             <p><strong><BiCheck className='service__list-icon' />Continuous Learning: Committed to staying updated with the latest industry trends, evaluating and improving application performance, maintainability, quality, usability, security, and scalability.</strong></p>

              </li>

              <li> 
             <p><strong><BiCheck className='service__list-icon' />Collaboration and Teamwork: Able to work closely with designers and translate client requirements into practical solutions.</strong></p>

              </li>
              <li> 
             <p><strong><BiCheck className='service__list-icon' />Focus on Quality: Prioritize delivering high-quality applications while ensuring browser support and performance.</strong></p>

              </li>
              <li> 
             <p><strong><BiCheck className='service__list-icon' />Dedication to Excellence: Committed to excellence and contributing to the success of development teams.</strong></p>

              </li>
            </ul>

By leveraging these skills, my aim is to achieve greatness and save limited resources through unlimited creativity.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

      <Skills />
    </section>
  )
}

export default About