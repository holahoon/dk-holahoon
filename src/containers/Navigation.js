import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import NavigationItem from "../components/NavigationItem/NavigationItem";

function Navigation() {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 767px)",
  });

  const navigationMenuItems = ["works", "blog", "about"];

  console.log(isMobileDevice);
  return (
    <header className='header'>
      <nav className='nav'>
        <span className='nav__logo'>
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
