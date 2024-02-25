import React from 'react'
import linkedin from '../../assets/linkedIn_PNG29.png';
import './contact.css';
import instagram from '../../assets/Instagram_logo_2016.svg.webp';
import github from '../../assets/github.png';

 export const Contact = () => {
  return (
    <section className='contactpage' id='contact'>
    <div>
    <h1 className='contactpagetitle'>
    Contact Me
    </h1>
   <form className='contactform'>
    <input type='text' className='nameContact'  placeholder="Your Name"/>
    <input type='email' className='email' placeholder="Email Address"/>
    <textarea name='message' className='message' rows='5' placeholder='message'></textarea>
    <button type='submit' value='send' className='submitbtn'>Submit</button>
   </form>
    </div>
    <div className='links'>
     <img src={linkedin} alt='Linkedin' className='link'/>
     
     <img src={github} alt='github' className='link'/>
     <img src={instagram} alt='instagram' className='link'/>
    
     </div>
    

    </section>
  )
}
