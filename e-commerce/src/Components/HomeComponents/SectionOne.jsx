import React from 'react'
import './SectionOne.css'
import image1 from '../images/hero-right.webp'
import { FiSearch } from "react-icons/fi";

const SectionOne = () => {
  return (
    <div className='homeSectionOne'>
    <div className='firstSection'>
      <p>In this season, find the best 🔥</p>
      <h2>Exclusive collection for everyone</h2>
      <button>Explore now <FiSearch /> </button>
    </div>
    <div className='secondSection'>
        <img src={image1} alt="" />
    </div>
    </div>
  )
}

export default SectionOne
