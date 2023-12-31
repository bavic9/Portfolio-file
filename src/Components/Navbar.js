import React from 'react';
import logo from '../logo.png';
//react fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className='container'>
      {/* <img className='logo' src={logo} alt='logo'/> */}
        <a className="navbar-brand" href="#"><h1 className='text-white text-uppercase mt-4'><span className='text-danger'>A</span>debayo</h1></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color: '#fff'}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">about me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">contacts</a>
            </li>
          </ul>
        </div>
      </div>      
    </nav> 
  )
}

export default Navbar
