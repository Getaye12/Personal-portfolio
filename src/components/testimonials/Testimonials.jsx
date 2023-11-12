import React from 'react'
import './testimonials.css';
import Avatar1 from '../../assets/avatar1.jpg';
import Avatar2 from '../../assets/avatar2.jpg';
import Avatar3 from '../../assets/avatar3.jpg';
import Avatar4 from '../../assets/avatar4.jpg';
import Avatar5 from '../../assets/avatar5.jpg';

// import Swiper core and required modules
import {Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Avatar1,
name: 'Adugna Bekele',
review: "[Adugna Bekele - Visionary CEO/Founder, Instructor, and Experienced Software Developer],  Adugna Bekele is a visionary leader, accomplished instructor, and highly skilled software developer. As the CEO/Founder of Evangadi Tech, he has built a reputation for driving innovation and delivering exceptional results in the technology sector.As a CEO, Adugna's vision and strategic thinking have propelled Evangadi Tech to the forefront of the industry. His ability to anticipate market trends and identify opportunities for growth has led to the development of groundbreaking solutions that address complex business challenges. Under his leadership, Evangadi Tech has become synonymous with excellence, reliability, and cutting-edge technology. You can visit evangadi.com"
  },
  {
    avatar: Avatar2,
name: 'Aschalew Gashaw',
review: "Aschalew Gashaw has been an exceptional instructor at Evangadi Tech. His deep knowledge and expertise in the subject matter have greatly contributed to my learning experience, Aschalew's teaching style is engaging and effective, making complex concepts easy to understand. He is patient, approachable, and always willing to go the extra mile to ensure student success. I highly recommend Aschalew as an instructor. aschu24.com"
  },
  {
    avatar: Avatar3,
name: "Marew Masresha",
review: "Marew Masresha has been an exceptional instructor at Evangadi Tech. His deep knowledge and expertise in the subject matter have greatly contributed to my learning experience, Marew's teaching style is engaging and effective, making complex concepts easy to understand. He is patient, approachable, and always willing to go the extra mile to ensure student success. I highly recommend Marew as an instructor. marew.masetawosha.com"
  },
  {
    avatar: Avatar4,
name: 'Tewedaj Shola',
review: "Tewedaj Shola is an exceptional instructor and coordinator at Evangadi Tech. Her deep knowledge and expertise in the field, combined with her strong organizational skills, have made a significant impact on my learning experience. Tewedaj's teaching style is engaging and effective, and she consistently goes above and beyond to ensure that students have the support they need to succeed. Her dedication and commitment to excellence are truly commendable."
  },

  {
    avatar: Avatar5,
    name: 'Biruk Kebede',
    review: " Biruk Kebede - Instructor and Software Developer at Evangadi Tech. Biruk Kebede is a highly skilled and dedicated instructor and software developer at Evangadi Tech.With a passion for technology and a deep understanding of software development, Biruk plays a pivotal role in shaping the learning experiences of students and contributing to the success of projects. biruk14.com"
  },

]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={ [Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={ 1 }
        navigation
        pagination={{ clickable: true }}
       >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Client Avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
            )
          })
        }
        </Swiper>
    </section>
  )
}

export default Testimonials