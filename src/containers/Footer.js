import React from "react";

import LanguageSwitch from "components/languageSwitch/LanguageSwitch";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div>Copyright © {currentYear} David Kim. All rights reserved.</div>
      <LanguageSwitch />
    </footer>
  );
}

export default Footer;
