import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id="about">

        <div className="about-container">

            <div className="about-heading" data-aos="flip-left">
                <strong>About me</strong>
              
                <h3>Engineering Intelligence with a Passion for Problem Solving</h3>

                <a href="tel:9792440259" className='btn-link'><i class="fa-solid fa-phone fa-beat-fade"></i>+91 9792440259</a>
            </div>
            
            <div className="about-details" data-aos="flip-right">
                <p>
               I'm an AI engineer passionate about solving problems by building intelligent, user-focused solutions that combine data, algorithms, and real-world impact.
                </p>
           
            </div>
        </div>
    </section>
  )
}

export default About
