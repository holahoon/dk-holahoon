import React from "react";
import { Link } from "react-router-dom";

function NavigationItem({ linkItem }) {
  return (
    <li>
      <Link to={`/${linkItem}`}>{linkItem}</Link>
    </li>
  );
}

export default NavigationItem;
