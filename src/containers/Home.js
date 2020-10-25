import React, { useContext } from "react";

import WrapperTransition from "components/wrapperContainerTransition/WrapperTransition";
import {
  IntroHeaderInEnglish,
  IntroSubHeaderInEnglish,
} from "components/data/dataInEnglish";
import {
  IntroHeaderInKorean,
  IntroSubHeaderInKorean,
} from "components/data/dataInKorean";
import useWindowsHeight from "hooks/useWindowsHeight";
import { LanguageContext } from "hooks/LanguageContext";

function Home() {
  const windowInnerHeight = useWindowsHeight();
  const { languageHandler } = useContext(LanguageContext);
  const isLanguageKorean = languageHandler[0];

  // Greetings message in en/kr
  const greetings = isLanguageKorean ? (
    <IntroHeaderInKorean />
  ) : (
    <IntroHeaderInEnglish />
  );

  // Sub message in en/kr
  const message = isLanguageKorean ? (
    <IntroSubHeaderInKorean />
  ) : (
    <IntroSubHeaderInEnglish />
  );

  return (
    <WrapperTransition>
      <div className='home' style={{ height: `${windowInnerHeight}px` }}>
        <div className='home__content-container'>
          {greetings}

          <div className='home__message-container'>
            {message}
            <p className='hustle'>Hustle 'n Code</p>
          </div>
        </div>
      </div>
    </WrapperTransition>
  );
}

export default Home;
