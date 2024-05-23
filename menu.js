import React from 'react'
import "./menu.css"


const Menu = () => {
  return (
    <div className='menu'>
        <h2 className='heading'>Travel </h2>
        <div className='list'>
     <ul>
        <li className='topmenu'><a href='#'>Home</a></li>
        <li className='topmenu'><a href='#Package'>Package</a></li>
        <li className='topmenu'><a href='shop'>shop</a></li>
        <li className='topmenu'><a href='about'>about</a></li>
        <li className='topmenu'><a href='page'>page</a></li>
        <li className='topmenu'><a href='news'>news</a></li>
        <li className='topmenu'><a href='contact'>contact</a></li>
        <li className='topmenu'><button className='button1'>Book now</button></li>
        
     </ul>
    </div>
    </div>
  )
}

export default Menu


