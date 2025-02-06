import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id="about">

        <div className="about-container">

            <div className="about-heading" data-aos="flip-left">
                <strong>About me</strong>
                <h3>Designing with passion for problem sovling</h3>
                <a href="tel:9792440259" className='btn-link'><i class="fa-solid fa-phone fa-beat-fade"></i>+91 9792440259</a>
            </div>
            
            <div className="about-details" data-aos="flip-right">
                <p>
                I’m a designer with a passion for problem-solving. I focus on creating intuitive, user-centered designs that not only look great but also provide effective solutions. My goal is to blend creativity with functionality to bring ideas to life.
                </p>
           
            </div>
        </div>
    </section>
  )
}

export default About