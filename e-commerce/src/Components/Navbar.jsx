import React from 'react'
import { FiSearch } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navSection'>

      <div className='logoDiv'>
        <img src="https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg" alt="Logo" />
      </div>


      <ul>
        <li>Men</li>
        <li>Woman</li>
        <li>Beauty</li>
        <li>Sport</li>
        <li>Template</li>
        <li>Explore</li>
      </ul>

      <div className='iconsDiv'>
        <p><FiSearch /></p>
        <p><GoPerson /></p>
        <p><FiShoppingCart /></p>
      </div>
    </div>
  )
}

export default Navbar
