import React from 'react'
import './styles.css'

import {FaGithubAlt as GitHub, FaFacebook as Facebook, FaTwitter as Twitter, FaLinkedin as Linkedin} from 'react-icons/fa'

function index() {
  return (
    <footer className='footer' id='contact'>
      <ul>
        <li><a href="https://github.com/hirokirigaya" target="_blank"><GitHub/></a></li>
        <li><a href="#Twitter"><Twitter/></a></li>
        <li><a href="#Facebook"><Facebook/></a></li>
        <li><a href="https://www.linkedin.com/in/daniel-junio-0832481bb/" target="_blank"><Linkedin/></a></li>
      </ul>
      <p>Maked with &hearts; by <a href="https://github.com/hirokirigaya" target="_blank">Daniel</a></p>
    </footer>
  )
}

export default index;