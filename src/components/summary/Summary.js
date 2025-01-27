import React from 'react'
import './summary.css'


const Summary = () => {
  return (
    <section id= "summary">
        <div className="summary-heading" data-aos="fade-right">

            <strong>My Skill</strong>
            <h2>Full-stack development, data science, and problem-solving expertise to create efficient, scalable solutions.</h2>

            <a href="" download className='btn-link'>
                Get CV <i class="fa-solid fa-download"></i></a>
                

        </div>

    <div className="summary-details" data-aos="fade-left">
        <p>
        I am a full-stack developer with expertise in HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express, and MongoDB. I build scalable, responsive web applications and RESTful APIs. Proficient in Python, C++, JavaScript, and Core Java, I also specialize in data science, with hands-on experience using Pandas, NumPy, Matplotlib, Tkinter, Streamlit, and Scikit-learn. Additionally, I’m skilled in tools like VS Code, Postman, GitHub, and Microsoft Office (Excel, Word, PowerPoint). 
        Strong in problem-solving and data structures.
            </p>
    </div>

    </section>
  )
}

export default Summary