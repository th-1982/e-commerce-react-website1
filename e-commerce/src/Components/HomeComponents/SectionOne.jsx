import React, { useState } from 'react'
import './SectionOne.css'
import image1 from '../images/hero-right.webp'
import image2 from '../images/hero-right-2.webp'
import image3 from '../images/hero-right-3.webp'
import { FiSearch } from "react-icons/fi";

const SectionOne = () => {
  const [showSectionOne, setShowSectionOne] = useState(true)
  const [showSectionTwo, setShowSectionTwo] = useState(false)
  const [showSectionThree, setShowSectionThree] = useState(false)

  const handleChangeOne = () => {
    setShowSectionOne(true);
    setShowSectionTwo(false);
    setShowSectionThree(false);
  }
  
  return (

    <div>

    {showSectionOne === true &&
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
    }

    {showSectionTwo === true &&
    <div className='homeSectionOne'>
    <div className='firstSection'>
      <p>In this season, find the best 🔥</p>
      <h2>Exclusive collection for everyone</h2>
      <button>Explore now <FiSearch /> </button>
    </div>

    <div className='secondSection'>
        <img src={image2} alt="" />
    </div>
    </div>
    }

    {showSectionThree === true &&
    <div className='homeSectionOne'>
    <div className='firstSection'>
      <p>In this season, find the best 🔥</p>
      <h2>Exclusive collection for everyone</h2>
      <button>Explore now <FiSearch /> </button>
    </div>

    <div className='secondSection'>
        <img src={image3} alt="" />
    </div>
    </div>
    }
    </div>
  )
}

export default SectionOne
