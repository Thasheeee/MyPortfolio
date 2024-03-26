import React from 'react'
import './intro.css'
import bg from '../../assets/my.png'
import Resume from './MyResume.pdf'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm<span className='introName'> Thasheera Fernando</span><br/>Software Engineering Undergraduate</span>
            <p className='introPara'>Download my resume from below.</p>
            <a href={Resume} download>
            <button className='btn'>Download</button></a>
        </div>
        <img src={bg} alt='Profil' className='bg'></img>
        
    </section>
  )
}

export default Intro
