import React, { useCallback, useEffect, useState } from 'react';
import './Home.css';
import Avatar from "../../Assests/images/suraj.jpeg"




const Home = () => {
const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;

const WORDS = ["AI Engineer ","FullStack Developer","Programer ", "Designer"];
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
//   const [isHovering, setIsHovering] = useState(false)


  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  // Optimize typing effect
  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);



    return (
        <section id="home">
            <div className='home-text' data-aos="fade-down">
                <strong>Hello, it's me</strong>
                <h1>Suraj Yadav</h1>

                <h2>I'm {text}</h2>
            
                  
                <p>

                // Software engineering is the process of creating efficient and reliable software solutions. 
                AI engineering involves building smart systems using data, algorithms, and machine learning.
                 </p>
                
                <div className="social-media">
                 
                <a href="https://www.linkedin.com/in/suraj097/" alt= "LinkedIn" target='blank'><i class="fa-brands fa-linkedin fa-beat-fade"></i></a>
                <a href="https://github.com/ErSuraj097" alt= "Github" target='blank'><i class="fa-brands fa-github fa-beat-fade"></i></a>
                </div>
                
                <a href="#summary" className='btn-link'> Scroll for me</a>
              </div>

            <div className='home-img' data-aos="fade-up" >
                <div className='img-box' >
                    <img src={Avatar} alt="Avatar" />

                    <h2>Suraj<br /><span>Software Developer</span></h2>
                
                <div className="social-media">
                <a href="https://www.linkedin.com/in/suraj097/" alt= "LinkedIn" target='blank'><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/ErSuraj097" alt= "Github" target='blank'><i class="fa-brands fa-github"></i></a>
                </div>


                <a href="https://drive.google.com/file/d/1jB6s06Q37AW_JT5Hh7xaI0WZ8BObmddp/view?usp=sharing" className='hire-me'>Hire me</a>
                </div>
            </div>

          
        </section>
    )
}

export default Home
