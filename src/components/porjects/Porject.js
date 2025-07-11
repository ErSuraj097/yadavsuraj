import React from 'react'
import './project.css'

// import bookSell from "../../Assests/images/bookSell.png"
// import bookStore from "../../Assests/images/bookStore.png"
// import remove from "../../Assests/images/remove.png"
// import recomend from "../../Assests/images/recomend.png"
// import Analytics from "../../Assests/images/Analytics.png"
// import VoiceCloning from "../../Assests/images/voice-cloning.png"
// import chatbot from "../../Assests/images/chatbot.png"

import bookSell from '../../Assests/images/bookSell.png';
import bookStore from '../../Assests/images/bookStore.png';
import remove from '../../Assests/images/remove.png';
import recomend from '../../Assests/images/recomend.png';
import Analytics from '../../Assests/images/Analytics.png';
import VoiceCloning from '../../Assests/images/voice-cloning.png';
import Chatbot from '../../Assests/images/chatbot.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Porject = () => {

    const data =[
            {
        src: VoiceCloning,
        url: "#!",
        name: "Multiligual Voice Cloning and Video Dubbing"
    },  {
        src: Chatbot,
        url: "#!",
        name: "AI Multilingual Chatbot"
    },
        {
        src: remove,
        url: "#!",
        name: "Image AI - Background Remover"
    },
        {
        src: bookSell,
        url: "#!",
        name: "E-Book Sell,"
    },
        {
        src: bookStore,
        url: "#!",
        name: "World Book Shop"
    },
        {
        src: recomend,
        url: "#!",
        name: "Movei Recommendation System"
    },
        {
        src: Analytics,
        url: "#!",
        name: "Data Analytics Dashboard"
    },
       
       
]
  return (
    <section id="porjects">
        
        
        

        <div className='project-heading'>
        <h3>Recent Porject</h3>
        


       
        
    
        </div>
        <Swiper 
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}

        navigation={true} 
        modules={[Navigation,Pagination]}
        className="mySwiper">
          
        {
          data.map(project =>{
            return(
              <SwiperSlide key={project.src}>
                
                <div className="project-box">
                    
                    <a href={project.url}>
                    <img src={project.src} className="img" alt="project" />
                    
                    <div className='p-overlayer'>
                      <strong>{project.name}</strong>
                        
                    <a href="" className='btn-link'>Live Demo</a>
                    <a href="" className='btn-link'> Github</a>
                  
                    </div>
                    
                    </a>
                </div>
                </SwiperSlide>
            )
        })

        }
          
       
       
          
         
       
      </Swiper>
        
    <div className="github-btn">
        <a href="https://github.com/ErSuraj097" alt="Github" target='blank' className='btn-link'>
        My Github<i className='fa-brands fa-github'></i>
        </a>

    </div>
    </section>
  )
}

export default Porject
