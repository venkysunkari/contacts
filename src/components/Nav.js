import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>


<nav className='navbar navbar-expand-lg navbar-dark bg-success'>
    <div className='container-fluid'>
        <Link className='navbar-brand mx-5' to="/">
            Contact Saver
        </Link>
        <ul className='navbar-nav mx-.5'>
            <li className='nav-item'><Link className='nav-link' to="/">Add</Link></li>
            <li className='nav-item'><Link className='nav-link' to="/saved">Saved</Link></li>
        </ul>
    </div>
  </nav>  
     

  </div>

  )
}

export default Nav;

