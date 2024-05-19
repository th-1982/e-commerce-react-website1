import React, { useState } from 'react'
import './SectionOne.css'
import image1 from '../images/hero-right.webp'
import image2 from '../images/hero-right-2.webp'
import image3 from '../images/hero-right-3.webp'
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
    <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

    </div>
    </div>
  )
}

export default SectionOne
