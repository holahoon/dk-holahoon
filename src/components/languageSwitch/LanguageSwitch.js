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
      <div
        className={`switch__en${language === "en" ? "--active" : ""}`}
        onClick={setLanguageEnglishHandler}
      >
        En
      </div>
      <span className='switch__slash'>/</span>
      <div
        className={`switch__kr${language === "kr" ? "--active" : ""}`}
        onClick={setLanguageKoreanHandler}
      >
        Kr
      </div>
    </div>
  );
}

export default LanguageSwitch;
