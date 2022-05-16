import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='container-fluid'>
      <h2>
        <nav className="navbar fixed-bottom navbar-dark ">
            <i className="bi bi-house"></i>
            <i className="bi bi-box"></i>
            <i className="bi bi-balloon-heart"></i>
            <i className="bi bi-person"></i>
        </nav>
      </h2>
    </div>
  )
}

export default Navbar
