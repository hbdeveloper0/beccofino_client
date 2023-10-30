import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import navLogo from '../../../assets/images/logos/new_logo_img-300x117.png'

const Navbar = () => {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ul-list-lift">
            <li className="nav-item">
                <a className="" href="/">
                  <DragHandleIcon className="line-icon mt-2"/>
                </a>
            </li>
            <li className="nav-item">
                <Link className="" to='/media'>
                  Media
                </Link>
            </li>
            <li className="nav-item">
                <Link className="" to="/">
                  Reservation
                </Link>
            </li>
            <li className="nav-item">
                <Link className="" href="/">
                  Events
                </Link>
            </li>

            <li className="nav-item">
                <a className="" href="/" style={{ marginLeft: '500px' }}>
                  <img src={navLogo} alt="logo" className="img-fluid" style={{ maxHeight:'80px' }}/>
                </a>
            </li>
          </ul>
          

          
          <ul className="nav-right-ul">
            <li><a href="/">Menu</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/" className="btn reservation-btn">Reservation</a></li>
          </ul>
        
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
