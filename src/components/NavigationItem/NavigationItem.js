import React from "react";
import { NavLink } from "react-router-dom";

function NavigationItem({ linkItem, closeMobileNav }) {
  return (
    <li className='nav__item' onClick={closeMobileNav}>
      <NavLink to={`/${linkItem}`} activeClassName='active-link'>
        {linkItem}
      </NavLink>
      <span className='red-line'></span>
    </li>
  );
}

export default NavigationItem;
