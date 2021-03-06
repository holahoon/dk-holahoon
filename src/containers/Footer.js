import React, { useContext } from "react";

import { LanguageContext } from "hooks/LanguageContext";

function Footer() {
  const { languageHandler } = useContext(LanguageContext);
  const language = languageHandler[0];
  const currentYear = new Date().getFullYear();

  const englishName = (
    <span className='footer__copyright__english'>David Kim</span>
  );
  const koreanName = <span className='footer__copyright__korean'>김명훈</span>;

  return (
    <footer className='footer'>
      <span className='footer__copyright'>
        © {currentYear} all rights reserved,{" "}
        {language === "en" ? englishName : koreanName}.
      </span>
    </footer>
  );
}

export default Footer;
