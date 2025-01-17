import React from "react";
import "./navbar.css";
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50}  duration={500} className="desktopMenuListItem">Project</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Contact</Link>
      </div>
      
    </nav>
  );
};

export default Navbar;
