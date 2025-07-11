import React from 'react'
import './summary.css'


const Summary = () => {
  return (
    // <section id= "summary">
    //     <div className="summary-heading" data-aos="fade-right">

    //         <strong>My Skill</strong>
    //         <h2>Full-stack development, data science, and problem-solving expertise to create efficient, scalable solutions.</h2>

    //         <a href="" download className='btn-link'>
    //             Get CV <i class="fa-solid fa-download"></i></a>
                

    //     </div>

    // <div className="summary-details" data-aos="fade-left">
    //     <p>
    //     I am a full-stack developer with expertise in HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express, and MongoDB. I build scalable, responsive web applications and RESTful APIs. Proficient in Python, C++, JavaScript, and Core Java, I also specialize in data science, with hands-on experience using Pandas, NumPy, Matplotlib, Tkinter, Streamlit, and Scikit-learn. Additionally, I’m skilled in tools like VS Code, Postman, GitHub, and Microsoft Office (Excel, Word, PowerPoint). 
    //     Strong in problem-solving and data structures.
    //         </p>
    // </div>

    // </section>

    <section id="summary">
  <div className="summary-heading" data-aos="fade-right">
    <strong>My Skills</strong>
    <h2>
      AI engineering, machine learning, and data-driven problem solving to build intelligent and scalable solutions.
    </h2>

    <a href="" download className="btn-link">
      Get CV <i class="fa-solid fa-download"></i>
    </a>
  </div>

  <div className="summary-details" data-aos="fade-left">
    <p>
      I'm an AI engineer focused on building smart, efficient, and scalable systems that solve real-world problems. I specialize in Python-based machine learning and data science using tools like Pandas, NumPy, Scikit-learn, Matplotlib, Streamlit, and Tkinter. I have experience developing and deploying AI models for prediction, classification, and automation tasks.<br></br>
      My foundation in full-stack development (React, Node.js, Express, MongoDB) complements my AI work, allowing seamless integration of intelligent features into user-facing applications. I'm also proficient in C++, Core Java, and familiar with development tools such as GitHub, VS Code, and Postman.<br></br>
      With strong problem-solving skills and deep knowledge of algorithms and data structures, I aim to create AI solutions that are not only innovative but also reliable, interpretable, and production-ready.
    </p>
  </div>
</section>

  )
}

export default Summary
