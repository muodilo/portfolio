import React from 'react'
import './contact.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { RiMessengerLine } from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

function Contact() {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const userId = process.env.REACT_APP_EMAILJS_USER_ID;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
    <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MailOutlineIcon className='contact__option-icon'/>
            <h4>Email</h4>
            <p>odilomurindahabi@gmail.com</p>
            <a href="mailto:odilomurindahabi@gmail.com" target='__blank'>Send a message</a>
          </article>
          <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Odilo</h5>
            <a href="https://m.me/murindahabi.odilo" target='__blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <WhatsAppIcon className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+250785244715</h5>
            <a href="https://wa.me/250785244715" target='__blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your FullName' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
    </div>
    </section>
  )
}

export default Contact
