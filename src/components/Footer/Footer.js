import React from 'react'
import './Footer.css'

const Footer = () => {
    const  Logo= "<YADAV/SURAJ"
  return (
    <footer>
        <span> Copyright &copy; 2025</span>
        <div className='social-link'>
            <a href="https://www.linkedin.com/in/suraj097/" alt="LinkedIn" target='blank'>
            <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/ErSuraj097" alt="Github" target='blank'>
            <i class="fa-brands fa-github"></i>
            </a>
            <a href="#!">
            <i class="fa-brands fa-facebook"></i>
            </a>

        </div>
        
        <a href="" className='footer-logo'> {Logo}</a>


    </footer>
  )
}

export default Footer