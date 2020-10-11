import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

import NavigationItem from "components/NavigationItem/NavigationItem";
import Backdrop from "layout/Backdrop";

function Navigation() {
  const [isMobileNavOpen, setIsMobileNavOPen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);
  const headerRef = useRef(null);
  const navigationMenuItems = ["works", "blog", "about"];

  useEffect(() => {
    window.addEventListener("scroll", lodashScrollHandler);
    return () => window.removeEventListener("scroll", lodashScrollHandler);
  }, []);

  const toggleMobileNavHandler = () => {
    setIsMobileNavOPen((prevState) => !prevState);
  };
  const closeMobileNavHandler = () => {
    setIsMobileNavOPen(false);
  };
  const lodashScrollHandler = useCallback(
    _.throttle(() => {
      let pageYOffset = window.pageYOffset;
      const headerHeight = headerRef.current.offsetHeight;
      pageYOffset > headerHeight * 1.05
        ? setNavBackground(true)
        : setNavBackground(false);
    }, 200),
    []
  );

  return (
    <header
      ref={headerRef}
      className={`header${navBackground ? "--sticky" : ""}`}
    >
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
            <NavigationItem
              key={i}
              linkItem={linkItem}
              closeMobileNav={closeMobileNavHandler}
            />
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
