import React, { useContext } from "react";

import { LanguageContext } from "hooks/LanguageContext";

function LanguageSwitch() {
  const { languageHandler } = useContext(LanguageContext);
  const [language, setLanguage] = languageHandler;

  // - if language is set to the same language, don't update the state so the component doesn't rerender unnecessarily
  const setLanguageKoreanHandler = () => language !== "kr" && setLanguage("kr");
  const setLanguageEnglishHandler = () =>
    language !== "en" && setLanguage("en");

  return (
    <div className='switch'>
      <span
        className={`switch__en${language === "en" ? "--active" : ""}`}
        onClick={setLanguageEnglishHandler}
      >
        Eng
      </span>
      <span className='switch__slash'>/</span>
      <span
        className={`switch__kr${language === "kr" ? "--active" : ""}`}
        onClick={setLanguageKoreanHandler}
      >
        Kor
      </span>
    </div>
  );
}

export default LanguageSwitch;
