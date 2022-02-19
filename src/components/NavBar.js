import React from 'react';          /*NavBar using Styled Components from NavBarElements.js file */
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavBarElements';
import {Link} from 'react-scroll'; /*Library used to scroll to specific component when clicked in NavBar Link */
import "./NavBar.css";


const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'> 
        </NavLink>
        <Bars />
        <NavMenu className = "menu">
          {/*Link #1 --Portfolio component */}
          <Link className = "p-link" activeClass ="active" to="portfolio" spy ={true} smooth ={true} duration={10}>
            Portfolio
          </Link>
          {/*Link #1 --About component */}
          <Link className = "p-link" activeClass ="active" to="a" spy ={true} smooth ={true}duration={10}>
            About
          </Link>
          {/*Link #1 --Contact component */}
          <Link className = "p-link"  activeClass ="active" to="c" spy ={true} smooth ={true} duration={10}>
            Contact
          </Link>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;
