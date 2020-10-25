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

  const getDaysHandler = () => {
    let ordinal = "";
    const startedDate = new Date("October 15, 2019").getTime();
    const currentDate = new Date().getTime();
    const days = Math.floor(
      (currentDate - startedDate) / (1000 * 60 * 60 * 24)
    ).toString();

    if (!isLanguageKorean) {
      const dayArray = [...days];
      const lastIndex = dayArray[dayArray.length - 1];
      lastIndex === "1"
        ? (ordinal = "st")
        : lastIndex === "2"
        ? (ordinal = "nd")
        : lastIndex === "3"
        ? (ordinal = "rd")
        : (ordinal = "th");
    }
    return { days, ordinal };
  };

  const { days, ordinal } = getDaysHandler();
  const aboutMeIntroduction = isLanguageKorean ? (
    <AboutInKorean days={days} />
  ) : (
    <AboutInEnglish days={days} ordianl={ordinal} />
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
