import React from 'react'
import './SectionOne.css'
import image1 from '../images/hero-right.webp'

const SectionOne = () => {
  return (
    <div>
    <div>
      <p>In this season, find the best</p>
      <h2>Exclusive collection for everyone</h2>
      <button>Explore Now</button>
    </div>
    <div>
        <img src={image1} alt="" />
    </div>
    </div>
  )
}

export default SectionOne
