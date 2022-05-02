import React from 'react'
import './styles.css'

import {BiMenu as Menu} from 'react-icons/bi'
import  { AiOutlineClose as Close} from 'react-icons/ai'

import { useState } from 'react'

function index() {
  const [open, setOpen] = useState()

  const openMenu = () => {
    setOpen(!open)
  }

  return (
    <>
    <div className={open === true ? 'overlayon' : 'overlay'}></div>
    <nav className='navbar'>
      <img src="../../../img/logo.svg" alt="logo" className='logo'/>
      <ul>
        <li><a href="/">home</a></li>
        <li><a href="#shop">shop</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>
    <nav className='navbar-mobile'>
      <Menu className='menu' onClick={openMenu}/>
      <img src="../../../img/logo.svg" alt="logo" className='logo'/>
      <div className={open === true ? 'navon' : 'navoff'}>
      <Close className='close' onClick={openMenu}/>
      <ul >
        <li><a href="/">home</a></li>
        <li><a href="#shop">shop</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
      </div>
    </nav>
    </>
  )
}

export default index;