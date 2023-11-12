// import React, {useEffect,useState} from 'react'
// import './header.css';
// import CTA from './CTA';
// import ME from "../../assets/me.jpg";
// import HeaderSocials from './HeaderSocials';
// import Pro from '../../assets/pro.jpg';
// const Header = () => {

//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const texts = [
//     "Full Stack web Developer",
//     "Mern Stack web Developer",
//     "React Developer"
//   ];
//   const delay = 2000; // Delay between each text (in milliseconds)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, delay);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [currentTextIndex, texts.length]);



//     return (
//         <header>
//             <div className="container header__container">
//             <div className="myprofile__container">
//             <h4>Hi  I'm</h4>
//             <h1>Getaye Asfaw</h1>
//       <div className="myprofile__indicator"></div>
//       <div className="myprofile__image">
//         <img src={Pro} alt="Profile" className="myprofile__image--circle" />
//       </div>
//     </div>
//           <div id="textContainer">
//        <h5 className="text-light">{texts[currentTextIndex]}</h5>
//       </div>
//            <CTA />
//                 <HeaderSocials />
//                 <div className="me">
//                     <img src={ME} alt="me" />
//                 </div>

//                 <a href="#contact" className="scroll__down">Scroll Down</a>
//         </div>
//         </header>
//   )
// }

// export default Header

// import "./header.css";
// import CTA from "./CTA";
// import ME from "../../assets/me.jpg";
// import HeaderSocials from "./HeaderSocials";
// import Pro from "../../assets/pro.jpg";
// import React, { useEffect, useState } from 'react';
// const Header = () => {
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const texts = [
//     "Full Stack web Developer",
//     "Mern Stack web Developer",
//     "React Developer",
//     " Limited resources are saved by unlimited creativity",
//   ];
//   const delay = 2000; // Delay between each text (in milliseconds)
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, delay);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [currentTextIndex, texts.length]);
//   return (
//     <header>
//       <div className="container header__container">
//         <div className="myprofile__container">
//           <div>
//           <h4>Hi, I'm</h4> <br/> <br/> <br />
//           </div>
//           <h1>Getaye Asfaw</h1>
//           <div className="myprofile__indicator"></div>
//           <div className="myprofile__image">
//             <img src={Pro} alt="Profile" className="myprofile__image--circle" />
//           </div>
//         </div>
//         <div id="textContainer">
//           <h5 className="text-light">{texts[currentTextIndex]}</h5>
//         </div>
//         <CTA />
//         <HeaderSocials />
//         <div className="me">
//           <img src={ME} alt="me" />
//         </div>
//         <a href="#contact" className="scroll__down">
//           Scroll Down
//         </a>
//       </div>
//     </header>
//   );
// };
// export default Header;

import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import Pro from "../../assets/pro.jpg";
import Skills from "./skills";
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "Full Stack web Developer",
    "Mern Stack web Developer",
    "React Developer",
    "Limited resources are saved by unlimited creativity",
  ];
  const delay = 2000; // Delay between each text (in milliseconds)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [currentTextIndex, texts.length]);

  return (
    <header>
      <div className="container header__container">
        <div className="myprofile__container">
          <div>
            <h4>Hello, I'm</h4> <br/> <br/> <br />
          </div>
          <h1>Getaye Asfaw from Ethiopia</h1>
          <div className="myprofile__indicator"></div>
          <div className="myprofile__image">
            <img src={Pro} alt="Profile" className="myprofile__image--circle" />
          </div>
        </div>
        <div id="textContainer">
          <h5 className="text-light">{texts[currentTextIndex]}</h5>
        </div>
        <CTA />
        <HeaderSocials />
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
      <Skills />
    </header>
  );
};

export default Header;