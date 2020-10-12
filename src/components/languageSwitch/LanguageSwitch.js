import React, { useContext, memo } from "react";

import { LanguageContext } from "hooks/LanguageContext";

function LanguageSwitch({ closeMobilenav }) {
  const { languageHandler } = useContext(LanguageContext);
  const [isLanguageKorean, setIsLanguageKorean] = languageHandler;

  const onLanguageChangeHandler = (e) => {
    const {
      target: { checked },
    } = e;
    setIsLanguageKorean(checked);
  };

  return (
    <div className='switch'>
      <input
        type='checkbox'
        className='toggle'
        value={isLanguageKorean}
        onChange={onLanguageChangeHandler}
        onClick={closeMobilenav}
      />
    </div>
  );
}

export default memo(LanguageSwitch);
