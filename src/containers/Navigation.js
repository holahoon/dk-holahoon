import React from "react";
import { Link } from "react-router-dom";

import NavigationItem from "../components/NavigationItem/NavigationItem";

const navigationMenuItems = ["works", "about"];

function Navigation() {
  return (
    <header className='header'>
      <nav className='nav'>
        <span>
          <Link to='/'>dk</Link>
        </span>
        <ul className='nav__list-container'>
          {navigationMenuItems.map((linkItem, i) => (
            <NavigationItem key={i} linkItem={linkItem} />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
