import React from 'react'
import bannerImg from '../images/rightLargeImg.webp'
import './SectionTwo.css'

const SectionTwo = () => {
  return (
    <div className='sectionTwoDiv'> 
    <div className='logocontainer'>
    <img src="https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg" alt="Logo" className='logoImage' />
    </div>
        <div className='sectionTwoLeft'>
      <h2>Earn free money <br /> with Ciseco
      </h2>
      <p>With Ciseco you will get freeship & saving combo...</p>
      <div className='sectionTwoButton'>
      <button className='savings'>Savings combo</button>
      <button>Discover more</button>
      </div>
    </div>
    <div className='sectionTwoRight'>
        <img src={bannerImg} alt="rightLargeImg" />
    </div>
    </div>
  )
}

export default SectionTwo
