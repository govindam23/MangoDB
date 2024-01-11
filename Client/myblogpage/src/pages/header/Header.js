import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'> 
    <div className='hTitle'>
      <span className='hTitleSm'>Monika Govindaraj's</span>
      <span className='hTitleLg'>Blog</span>
    </div>
    
    <img 
      className='hImg'
      src='https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
      alt=''/>

</div>
    
  )
}

export default Header