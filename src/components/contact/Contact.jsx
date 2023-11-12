import  React, { useRef } from 'react'
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { IoCall } from 'react-icons/io5';
import emailjs from 'emailjs-com';
const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_z299wgp', 'template_ylyzpki', form.current, '4dHk7bkQ098Gjt-vV')
  //   e.target.reset();
     
  // }
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_z299wgp', 'template_ylyzpki', form.current, '4dHk7bkQ098Gjt-vV')
    .then((result) => {
      console.log(result.text);
      alert('Email sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('An error occurred while sending the email. Please try again later.');
    });

  e.target.reset();
};
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            < MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5> asfawgetaye123@gmail.com</h5> or
            <h5> gedmekedi21@gmail.com</h5>
            <a href="mailto:gedmekedi21@gmail.com" target='_blank'>Send a message</a>
            <a href="mailto:asfawgetaye123@gmail.com" target='_blank'></a>
          </article>
          <article className="contact__option">
            < RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Getaye Asfaw</h5>
            <a href="https://www.facebook.com/getaye.asfaw.7/" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            < BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+251 91 265 2077</h5>
            <a href="https://api.whatsapp.com/send?phone+251 91 265 2077" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            < IoCall className='contact__option-icon' />
            <h4> Call</h4>
            <h5>(+251) 91 265 2077</h5>  or
            <h5>(+251) 906348779</h5> 
          </article>

        </div>
        {/* ===end of contact options ===  */ }
       
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='your full name' required />
          <input type="email" name='email' placeholder='your email' required />
          <textarea name="message"  rows="7" placeholder='your message here!' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact