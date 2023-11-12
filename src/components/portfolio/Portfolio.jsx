import React from 'react'
import './portfolio.css';
import Portfolio1 from '../../assets/portfolio1.jpeg';
import Portfolio2 from '../../assets/portfolio2.jpeg';
import Portfolio3 from '../../assets/portfolio3.jpeg';
import Portfolio4 from '../../assets/portfolio4.jpeg';
// import Portfolio5 from '../../assets/portfolio5.jpeg';
import Portfolio6 from '../../assets/portfolio2.jpeg';
// import Portfolio7 from '../../assets/portfolio7.jpg';


///DO NOT USE THE IMAGES IN PRODUCTION
const data = [
  {
    id: 1,
    image: Portfolio1,
    title: 'Apple-clone website built from scratch using react',
    github: 'https://github.com/Getaye12/Apple-front-end-developed-by-react',
    demo: 'https://apple-by--react.web.app',
  },
  {
    id: 2,
    image: Portfolio2,
    title: 'Amazon-clone website built from scratch using react with payment method',
    github: 'https://github.com/Getaye12/Amazon-payment',
    demo: 'https://clone-front-end-9c150.firebaseapp.com',
 
  },
  {
    id: 3,
    image: Portfolio3,
    title: 'Complete Netflix clone developed from scratch up to test up of components by using react ',
    github: 'https://github.com/Getaye12/Netflix',
    demo: 'https://netflix-f67cd.web.app',
 
  },
  {
    id: 4,
    image: Portfolio4,
    title: 'Apple font-end replica developed by html, css and bootstrap',
    github: 'https://github.com/Getaye12/Apple-front-end-bootstrap',
    demo: 'https://apple-front-end-by-bootstrap.web.app ',
 
  },
//   {
//     id: 5,
//     image: Portfolio5,
//     title: 'Apple front end web app developed by react ',
//     github: 'https://Github.com',
//     demo: 'https://personal-portfolio-9b447.web.app',
//  ///https://dribbble.com/Alien_pixels
//   },
  {
    id: 6,
    image: Portfolio6,
    title: 'Amazon only front-end  web app developed from scratch by using react   ',
    github: 'https://github.com/Getaye12/amazon-clone',
    demo: ' https://without-payment-c6fc3.web.app',
 
  },
  // {
  //   id: 7,
  //   image: Portfolio7,
  //   title: 'Instagram replica developed from scratch by using react  ',
  //   github: 'https://Github.com',
  //   demo: 'https://personal-portfolio-9b447.web.app',
 
  // }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container"> {
        data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={ image } alt={title} />
              </div>
              <h3 className='simulate' >{ title }</h3 >
              <div className="portfolio__item-cta">
                <a href={github } className='btn' target='_blank' rel='noreferrer'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
              </div>
            </article>
          )

        })
      }
   </div>
    </section>
  )
}

export default Portfolio