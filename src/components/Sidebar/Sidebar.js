import React from 'react'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>Blog</a></li>
        </ul>
    </div>
  )
}
