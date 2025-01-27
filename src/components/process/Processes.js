import React from 'react'
import './process.css'


const Processes = () => {

    const data=[
        {
        id:"01",
        title: "Pre-Process",
        contents: ["Collect Information","Persons", "setupGoal", 'Project Folder + Moodboard']
    },
        {
        id:"01",
        title: "pre-process",
        contents: ["Collect Information","Persons", "setupGoal", 'Project Folder + Moodboard']
    },
        {
        id:"01",
        title: "pre-process",
        contents: ["Collect Information","Persons", "setupGoal", 'Project Folder + Moodboard']
    },
        {
        id:"01",
        title: "pre-process",
        contents: ["Collect Information","Persons", "setupGoal", 'Project Folder + Moodboard']
    },
        {
        id:"01",
        title: "pre-process",
        contents: ["Collect Information","Persons", "setupGoal", 'Project Folder + Moodboard']
    },
]

  return (
    <section id='process' data-aos="fade-down">
        <div className='process-heading'>
            <h3>Process</h3>
        </div>
        <div className="process-container">
            {
                data.map(process =>{
                    return(<div className="process-box" key={process}>

                        <span>{process.id}</span>
                        <strong>{process.title}</strong>

                        <ul>
                            {
                                process.contents.map(content =>{
                                    return(
                                        <li key={content}>{content}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>)

                })
            }

        </div>

    </section>
  )
}

export default Processes