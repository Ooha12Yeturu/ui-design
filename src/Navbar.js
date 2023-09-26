import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <a href='https://uidesigndaily.com/'>
         <img className="daily-ui-logo" src="https://uidesigndaily.com/public/img/uidesigndaily-logo.svg" alt="UI Design Daily" />
        </a>

      </div>
      <div className="right">
        <a href="#" className="nav-link">Design</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Contact</a>
        <a href="#" className="nav-link">License</a>
      </div>
    </nav>
  );
}

export default Navbar;
