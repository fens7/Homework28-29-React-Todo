import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
        <nav className='nav'>
            <div className='nav-item'><Link to='/'><span>Головна</span></Link></div>
            <div className='nav-item'><Link to='/contacts'><span>Контакти</span></Link></div>
        </nav>
    </>
  )
}
export default Header;