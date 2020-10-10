import React from "react";
import { Link } from "react-router-dom";

function NavigationItem({ linkItem }) {
  return (
    <li className='nav__item'>
      <Link to={`/${linkItem}`}>{linkItem}</Link>
      <span className='red-line'></span>
    </li>
  );
}

export default NavigationItem;
