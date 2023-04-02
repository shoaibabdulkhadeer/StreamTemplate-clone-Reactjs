import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {


  return (
    <div className='Navbar'>
        <div className='titles'>
            <h1>S</h1>
        <h3>STREAMIT</h3>
        </div>
         

            <div className='NavLinks'>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pages</li>
                    <li>Blog </li>
                </ul>
            </div>

            <div className='Icons'>
                <p>search</p>
                <p>Profile</p>
            </div>

    </div>
  )
}

export default Navbar