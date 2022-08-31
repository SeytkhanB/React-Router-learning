
import React from 'react'
import {Link} from 'react-router-dom'

function Profile() {
  return (
    <div className='main'>
      <h1>Profile page</h1>
      <nav>
        <ul className='ul'>
          <li><Link className='link' to='/profile/info'>Profile info</Link></li>
          <li><Link className='link' to='/profile/settings'>Profile settings</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Profile