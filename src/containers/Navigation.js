import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavigationItem from "components/NavigationItem/NavigationItem";
import Backdrop from "layout/Backdrop";

function Navigation() {
  const [isMobileNavOpen, setIsMobileNavOPen] = useState(false);

  const navigationMenuItems = ["works", "blog", "about"];

  const toggleMobileNavHandler = () => {
    setIsMobileNavOPen((prevState) => !prevState);
  };
  const closeMobileNavHandler = () => {
    setIsMobileNavOPen(false);
  };

  return (
    <header className='header'>
      <span className='header__logo'>
        <Link to='/'>dk</Link>
      </span>

      <div className='mobile-menu' onClick={toggleMobileNavHandler}>
        <span
          className={`mobile-menu__item ${
            isMobileNavOpen ? "mobile--active" : ""
          }`}
        ></span>
      </div>

      <nav className={`nav ${isMobileNavOpen ? "nav-mobile--active" : ""}`}>
        <ul className='nav__list-container'>
          {navigationMenuItems.map((linkItem, i) => (
            <NavigationItem key={i} linkItem={linkItem} />
          ))}
        </ul>
      </nav>

      <Backdrop
        toggleBackdrop={isMobileNavOpen}
        backdropHandler={closeMobileNavHandler}
      />
    </header>
  );
}

export default Navigation;
