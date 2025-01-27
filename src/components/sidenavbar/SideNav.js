import React from 'react'
import './SideNav.css'
import { FaBriefcase, FaCogs, FaHome, FaUser } from 'react-icons/fa'

const SideNav = () => {
  return (
    <div className="sidebar">
    <ul className="sidebar-menu">
      <li className="sidebar-item">
      <FaHome className="sidebar-icon" />{/* Replace with "i" for home */}
        
      </li>
      <li className="sidebar-item">
        <FaUser className="sidebar-icon" />
        
      </li>
      <li className="sidebar-item">
        <FaBriefcase className="sidebar-icon" />
       
      </li>
      <li className="sidebar-item">
        <FaCogs className="sidebar-icon" />
        
      </li>
    </ul>
  </div>

  )
}

export default SideNav