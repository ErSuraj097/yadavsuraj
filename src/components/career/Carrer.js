import React from 'react'
import './carrer.css'


    
   
    


const Carrer = () => {
    
    const carrers = [
        {
            title: "Frontend Developer",
            name: "Code cluse - Intern",
            year: "Apr,2023 - July, 2023"
    },
        {
            title: "Web Developer",
            name: "Lets Grow More - Intern",
            year: "May,2024 - Aug, 2024"
    },
]
    const education = [
        {
            title: "Bachelor of Technology",
            name: "Computer Science And Engineering",
            year: "2021-2024",
            percent: " 7.8 CGPA"

    },
        {
            title: "Diploma",
            name: "Computer Science And Engineering",
            year: "2018-2021",
            percent: " 81 %"
    },

]

  return (
    <section id="carrer">
        <div className="carrer-education">
            <div className="carrer" data-aos="fade-right">
                <h3>Carrer</h3>
                <div className="c-b-container">
                    {carrers.map((carrer,index) =>{
                        return(
                            <div className="c-box">
                                <h4>{carrer.title}</h4>
                                <strong>{carrer.name}</strong>
                                <span>{carrer.year}</span>

                            </div>
                        )
                    })}
                </div>

            </div>
            <div className="education" data-aos="fade-left">
                <h3>Education</h3>
                <div className="c-b-container">
                    {education.map((carrer,index) =>{
                        return(
                            <div className="c-box" key={index}>
                                <h4>{carrer.title}</h4>
                                <strong>{carrer.name}</strong>
                                <span>{carrer.year } |  
                                { carrer.percent }</span>

                            </div>
                        )
                    })}
                </div>

            </div>
           
        </div>
        <div className="btn-c">
                <a href="https://drive.google.com/file/d/1d-V3-FURUrff8S1dxHfVmcieNhVBQR_t/view?usp=sharing" target='blank' download className='btn-link'>
                    
                    Get Cv<i class="fa-solid fa-download"></i></a>
            </div>
    </section>
  )
}

export default Carrer
