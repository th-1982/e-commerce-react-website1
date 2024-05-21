import React, { useState } from 'react'
import './SectionOne.css'
import image1 from '../images/hero-right.webp'
import image2 from '../images/hero-right-2.webp'
import image3 from '../images/hero-right-3.webp'


import cardImg1 from '../images/1.webp'
import cardImg2 from '../images/3.webp'
import cardImg3 from '../images/4.webp'
import cardImg4 from '../images/5.webp'


import { FiSearch } from "react-icons/fi";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



const SectionOne = () => {


  AOS.init();


  const [showSectionOne, setShowSectionOne] = useState(true)
  const [showSectionTwo, setShowSectionTwo] = useState(false)
  const [showSectionThree, setShowSectionThree] = useState(false)

  const handleChangeOne = () => {
    setShowSectionOne(true);
    setShowSectionTwo(false);
    setShowSectionThree(false);
  }

  
  const handleChangeTwo = () => {
    setShowSectionOne(false);
    setShowSectionTwo(true);
    setShowSectionThree(false);
  }


  const handleChangeThree = () => {
    setShowSectionOne(false);
    setShowSectionTwo(false);
    setShowSectionThree(true);
  }
  
  
  return (

    <div>
      <div className='generalHomeSection'>

    {showSectionOne === true &&
    <div className='homeSectionOne' data-aos="fade-up" data-aos-duration="2000">
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
    <div className='homeSectionOne' data-aos="fade-up" data-aos-duration="2000">
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
    <div className='homeSectionOne' data-aos="fade-up" data-aos-duration="2000">
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

    <div className='myBtn'>
      <button className={showSectionOne === true && 'activeBtn'} onClick={handleChangeOne}></button>
      <button className={showSectionTwo === true && 'activeBtn'} onClick={handleChangeTwo}></button>
      <button className={showSectionThree === true && 'activeBtn'} onClick={handleChangeThree}></button>
    </div>
    </div>

    <div className='homeSectionTwo'>
      <h2>Discover more. Good things are waiting for you</h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> 
          <div className='card1'>
          <div className='card1One'>
            <p>Explore new arrivals</p>
            <h2>Shop the latest from top brands</h2>
            <button>show me all</button>
          </div>
          <div className='card1Two'> 
            <img src={cardImg1} alt="card-image" />
          </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className='card1'>
          <div className='card1One'>
            <p>Explore new arrivals</p>
            <h2>Shop the latest from top brands</h2>
            <button>show me all</button>
          </div>
          <div className='card1Two'> 
            <img src={cardImg1} alt="card-image" />
          </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className='card1'>
          <div className='card1One'>
            <p>Explore new arrivals</p>
            <h2>Shop the latest from top brands</h2>
            <button>show me all</button>
          </div>
          <div className='card1Two'> 
            <img src={cardImg1} alt="card-image" />
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card1'>
          <div className='card1One'>
            <p>Explore new arrivals</p>
            <h2>Shop the latest from top brands</h2>
            <button>show me all</button>
          </div>
          <div className='card1Two'> 
            <img src={cardImg1} alt="card-image" />
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
          <div className='card1One'>
            <p>Explore new arrivals</p>
            <h2>Shop the latest from top brands</h2>
            <button>show me all</button>
          </div>
          <div className='card1Two'> 
            <img src={cardImg1} alt="card-image" />
          </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className='card1'>
          <div className='card1One'>
            <p>Explore new arrivals</p>
            <h2>Shop the latest from top brands</h2>
            <button>show me all</button>
          </div>
          <div className='card1Two'> 
            <img src={cardImg1} alt="card-image" />
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

    </div>
    </div>
  )
}

export default SectionOne
