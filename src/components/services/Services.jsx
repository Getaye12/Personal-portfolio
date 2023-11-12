import React from 'react'
import './services.css';
import { BiCheck } from 'react-icons/bi';
const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
            <p><strong><BiCheck className='service__list-icon' />User Research: Conducting research to understand the target audience, their needs, and behaviors, in order to inform the design process.</strong></p>
            </li>
            <li>
            <p><strong><BiCheck className='service__list-icon' />Wireframing: Creating low-fidelity visual representations of the website or application's layout, structure, and functionality.</strong></p>
            </li><li>
            <p><strong><BiCheck className='service__list-icon' />Prototyping: Building interactive prototypes that simulate user interactions and demonstrate the flow and functionality of the web app.</strong></p>
            </li>
            <li>
            <p><strong><BiCheck className='service__list-icon' />Visual Design: Crafting visually appealing interfaces that align with the brand identity, using color schemes, typography, and imagery.</strong></p>
            </li>
            <li>
            <p><strong><BiCheck className='service__list-icon' />Responsive Design: Ensuring the web app's design is optimized for various devices and screen sizes, providing a seamless user experience.</strong></p>
            </li>
            <li>
            <p><strong><BiCheck className='service__list-icon' />Information Architecture: Organizing and structuring the content and navigation of the web app to enhance usability and findability.</strong></p>
            </li>
            <li>
            <p><strong><BiCheck className='service__list-icon' />Interaction Design: Defining how users interact with the web app through intuitive and responsive interface elements and animations.</strong></p>
            </li>
            <li>
            <p><strong><BiCheck className='service__list-icon' />Usability Testing: Conducting tests with real users to evaluate the usability and effectiveness of the web app's design and identifying areas for improvement.</strong></p>
            </li>
            <li>
            <p><strong><BiCheck className='service__list-icon' />Accessibility Design: Ensuring that the web app is accessible to users with disabilities, following accessibility guidelines and standards.</strong></p>
            </li>
            <li>
            <p><strong><BiCheck className='service__list-icon' />User Interface (UI) Style Guide: Creating a comprehensive guide that outlines the visual design principles, component usage, and interaction patterns for consistency in the web app's user interface.</strong></p>
            </li>
          </ul>
        </article>
        {/* ====End of UI/UX===  */ }
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          {/* <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Website Development: Creating websites that adapt and display properly on various devices, including desktops, tablets, and mobile devices.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            
          </ul> */}
          <ul className="service__list">
  <li>
    <p><strong><BiCheck className='service__list-icon' /> Responsive Website Development:</strong> Creating websites that adapt and display properly on various devices, including desktops, tablets, and mobile devices.</p>
  </li>
  <li>
    <p><strong><BiCheck className='service__list-icon' />Front-End Development: Building the user-facing components of a website using HTML, CSS, and JavaScript to create visually appealing and interactive user interfaces.</strong></p>
  </li>
  <li>
    <p><strong><BiCheck className='service__list-icon' /> Back-End Development: Developing the server-side logic and functionality of a website using technologies such as Node.js, PHP, or Ruby on Rails.</strong></p>
  </li>
  <li>
    <p><strong><BiCheck className='service__list-icon' /> Full-Stack Development: Combining front-end and back-end development to create end-to-end solutions, handling both the client-side and server-side aspects of web development.</strong></p>
  </li>
  <li>
    <p><strong><BiCheck className='service__list-icon' /> E-commerce Development: Building online stores and integrating secure payment gateways to facilitate online transactions and enable businesses to sell products or services online..</strong></p>
  </li>
  <li>
    <p><strong><BiCheck className='service__list-icon' /> Web Application Development: Creating dynamic web applications that provide specific functionalities and features tailored to meet the unique needs of businesses.</strong></p>
  </li>
  <li>
    <p><strong><BiCheck className='service__list-icon' /> Custom Web Development: Developing bespoke websites and web applications from scratch, tailored to the specific requirements and branding of a company.</strong></p>
    </li>
    <li>
    <p><strong><BiCheck className='service__list-icon' /> API Development and Integration: Building and integrating APIs (Application Programming Interfaces) to enable seamless data exchange and integration with third-party services or systems.</strong></p>
      </li>
     <li>
    <p><strong><BiCheck className='service__list-icon' />Website Maintenance and Support: Providing ongoing maintenance, updates, bug fixes, and technical support to ensure the smooth and uninterrupted functioning of websites.</strong></p>
  </li>
</ul>
        </article>
        {/* =======End of second=======  */ }
        
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <p><strong><BiCheck className='service__list-icon' />Collaborating with Designers and Developers: Working closely with designers and developers to ensure content aligns with the overall website design and functionality, and collaborating on content integration and implementation.</strong></p>
            </li>
            <li>
            <p><strong><BiCheck className='service__list-icon' />Content Localization and Translation: Adapting and translating content into different languages or regional variants to cater to a global audience and expand the company's reach.</strong></p>
            </li>
            <li>
            <p><strong><BiCheck className='service__list-icon' />Conducting Content Audits: Evaluating existing content for relevance, accuracy, and effectiveness, identifying areas for improvement, and recommending content optimization strategies.
             </strong></p>
            </li>
            <li>
            <p><strong><BiCheck className='service__list-icon' />Curating and Managing Content: Researching, gathering, and organizing relevant content from various sources, ensuring proper categorization and presentation on the website or blog.
             </strong></p>
            </li>
            <li>
            <p><strong><BiCheck className='service__list-icon' />Producing Video Content: Conceptualizing, scripting, and creating videos for promotional purposes, tutorials, product demonstrations, or other engaging multimedia content.
             </strong></p>
            </li>
            <li>
            <p><strong><BiCheck className='service__list-icon' />Crafting Social Media Content: Developing captivating and shareable content for social media platforms, including posts, captions, and visual assets, to increase brand visibility and engagement.
             </strong></p>
            </li>
            <li>
            <p><strong><BiCheck className='service__list-icon' />Designing Visual Content: Creating visually appealing graphics, infographics, and images to enhance the overall look and feel of the website and improve user engagement.
             </strong></p>
            </li>
           
            <li>
            <p><strong><BiCheck className='service__list-icon' />Creating SEO-friendly content involves generating optimized content that incorporates relevant keywords and follows SEO best practices. The goal is to improve organic search rankings and increase visibility on search engines.
             </strong></p>
            </li>
            <li>
            <p><strong><BiCheck className='service__list-icon' />Writing Engaging Web Copy: Crafting compelling and persuasive content for websites, including landing pages, product descriptions, blog posts, and About Us pages.
             </strong></p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services