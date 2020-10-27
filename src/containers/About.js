import React, { useContext } from "react";

import WrapperTransition from "components/wrapperContainerTransition/WrapperTransition";
import { AboutInEnglish } from "components/data/dataInEnglish";
import { AboutInKorean } from "components/data/dataInKorean";
import SocialContact from "components/socialContact/SocialContact";
import { LanguageContext } from "hooks/LanguageContext";
import LottieImage from "components/lottieImage/LottieImage";

function About() {
  const { languageHandler } = useContext(LanguageContext);
  const isLanguageKorean = languageHandler[0];

  const aboutMeIntroduction = isLanguageKorean ? (
    <AboutInKorean />
  ) : (
    <AboutInEnglish />
  );

  return (
    <WrapperTransition>
      <div className='about'>
        <LottieImage isAboutPage />
        {aboutMeIntroduction}
        <SocialContact />
      </div>
    </WrapperTransition>
  );
}

export default About;
