import React from 'react'
import './styles.css'


function index(props) {
  return (
    <main className='container'>{props.children}</main>
  )
}

export default index;