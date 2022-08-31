import React from 'react'
import {Link} from 'react-router-dom'

function Header() {

  return (
    <div>
      <nav className='nav'>
        <ul>
          <li><Link className='link' to='/'>Home</Link></li>
          <li><Link className='link' to='/about'>About</Link></li>
          <li><Link className='link' to='/profile'>Profile</Link></li>
          <li><Link className='link' to='/services'>Services</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header