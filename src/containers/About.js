import React, { useContext } from "react";

import WrapperTransition from "components/wrapperContainerTransition/WrapperTransition";
import SocialContact from "components/socialContact/SocialContact";
import { LanguageContext } from "hooks/LanguageContext";
import LottieHi from "components/lottieImage/LottieHi";

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
    <div className='about__korean-introduction'>
      <h3>반갑습니다!</h3>
      <h2>
        프론트엔드 개발자 김명훈<span>(DK)</span> 입니다.
      </h2>
      <p>
        미국 조지아주 둘루스에 위치한 디지털 마케팅 에이젼시에 프론트엔드
        개발자로 첫 입사하여 많은 개발자들과 함께 프로젝트를 협업하며 QA 와 PM
        등 다른 직군과 함께 문제 해결을 위한 능동적인 소통의 중요성을 알게
        되었습니다. 퇴근 후에는 부족함을 보충과 새로운 기술 습득을 위해
        공부하였고 디자이너와 함께 소통하며 사이드프로젝트도 진행하였습니다.
      </p>
      <p>
        저도 많은 개발자처럼 저도 처음 "hello world" 를 콘솔에 출력한 날이
        기억납니다. 역시 예상하신대로 그날 제가 직접 작성한 코드가 브라우저에서
        작동될때의 그 희열감과 신기함은 이루 말할수가 없었습니다.
      </p>
      <p>
        오늘이 공식적으로 프론트엔드 개발자가 된지 정확히 {days}일이 되었습니다.
        그러나 저의 꿈은 프론트엔드 개발자에서 끝내는 것이 아닙니다. 점진적으로
        성장하여 영향력 있는 개발자가 되는 그날까지 hustle 'n code.
      </p>
      <p>
        지금은 전세계적으로 펜더믹이라는 안정적이지 않는 시기에 큰 위험을
        무릅쓰고 결정을 하여 한국에서 개발자의 꿈을 이어가고자 귀국 하였습니다.
      </p>
      <p>기회가 된다면 함께 성장하고 싶습니다. 언제든지 연락주세요!</p>
    </div>
  ) : (
    <div className='about__english-introduction'>
      <h3>Hey there! thanks for stopping by</h3>
      <h2>
        My name is David Kim<span>(DK)</span>
      </h2>
      <p>
        My front-end career started at a digital marketing agency located in
        Duluth, GA. There, I've collaborate with other developers as well as QAs
        and PMs and learned the importance of active communication. In my spare
        times, I've also continued to learn and worked on side projects with a
        designer to strenghten my weaknesses and find improvements.
      </p>
      <p>
        Like most of the developers do, I still remember the day when I first
        console logged "hello world" and as you might have guessed, it was the
        day when I was completely mesmerized by the beauty of seeing my very own
        written code working on the browser
      </p>
      <p>
        Well, today marks the {days}
        <sup>{ordinal}</sup> day since I officially became a front-end developer
        and I don't plan on just staying as a front-end developer, but I dream
        of growing as a "damn good developer". 'Til that day comes, hustle n'
        code.
      </p>
      <p>
        In the midst of an awful global pandemic(COVID 19), I have decided to
        leave Atlanta, GA and move back to the country where I was raised most
        of my youth and teenage years- Seoul, Republic of Korea.
      </p>
      <p>
        I'm currently open for opportunities to grow together. Don't hesitate to
        contact me!
      </p>
    </div>
  );

  return (
    <WrapperTransition>
      <div className='about'>
        <LottieHi />
        {aboutMeIntroduction}
        <SocialContact />
      </div>
    </WrapperTransition>
  );
}

export default About;
