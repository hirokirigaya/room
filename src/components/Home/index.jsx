import React from 'react'
import './styles.css'
import Navbar from '../Navbar'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import {useState} from 'react'

SwiperCore.use([Navigation])

import { useRef } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';

import { CgArrowLongRight as Arrow } from 'react-icons/cg'



function index() {

  const [prevEl, setPrevEl] = useState(null)
  const [nextEl, setNextEL] = useState(null)



  return (
    <main>
      <Navbar />
      <section className='first-container'>
        <div className='slider'>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}

            // Use state in buttom

            modules={Navigation}
            navigation={{ prevEl, nextEl }}
    
          >
            <SwiperSlide>
              <img src="../../../img/slider1.jpg" alt="slider" className='img-desk' />
              <img src="../../../img/slidermobile1.jpg" alt="slider" className='img-mob' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../../../img/slider2.jpg" alt="slider" className='img-desk' />
              <img src="../../../img/slidermobile2.jpg" alt="slider" className='img-mob' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../../../img/slider3.jpg" alt="slider" className='img-desk' />
              <img src="../../../img/slidermobile3.jpg" alt="slider" className='img-mob' />
            </SwiperSlide>
          </Swiper>

          <div className='arrows'>
            <div ref={(node) => setPrevEl(node)} className="arrow-left">
              <img src="../../img/arrowleft.svg" alt="arrow-left" />
            </div>
            <div ref={(node) => setNextEL(node)} className="arrow-right">
              <img src="../../img/arrowright.svg" alt="" />
            </div>
          </div>
        </div>
        <div className='discover'>
          <h1>Discover innovative ways to decorate</h1>
          <p>  We provide unmatched quality, comfort, and style for property owners across the country.
            Our experts combine form and function in bringing your vision to life. Create a room in your
            own style with our collection and make your property a reflection of you and what you love.
          </p>
          <div className='button'>
            <button>Shop now </button>
            <Arrow />
          </div>
        </div>
      </section>
      <section className='second-container'>
        <img src="../../../img/ambientdark.jpg" alt="img dark" className='img-dark' />
        <div className='about' id='about'>
          <h2> About our furniture</h2>
          <p>
            Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
            to ensure that every product is made as perfect and as consistent as possible. With three decades of
            experience in this industry, we understand what customers want for their home and office.
          </p>
        </div>
        <img src="../../../img/ambientlight.jpg" alt="img-light" className='img-light' />

      </section>
    </main>
  )
}

export default index;