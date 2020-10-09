import React, { useContext } from "react";

import { LanguageContext } from "hooks/LanguageContext";

function Home() {
  const { languageHandler } = useContext(LanguageContext);
  const language = languageHandler[0];
  const greetingsInEnglish = (
    <div className='home__english-container'>
      <h3 className='english-greeting'>Hi there!</h3>
      <h1 className='english-name'>
        I'm <span>David</span>,
      </h1>
      <h2 className='english-title'>
        a <span>Frontend Developer</span>
      </h2>
    </div>
  );
  const greetingsInKorean = (
    <div className='home__korean-container'>
      <h3 className='korean-greeting'>반갑습니다!</h3>
      <h2 className='korean-title'>
        <span>프론트엔드 개발자</span>
      </h2>
      <h1 className='korean-name'>
        <span>김명훈</span> 입니다
      </h1>
    </div>
  );

  return (
    <main className='home'>
      <div>
        {language === "en" ? greetingsInEnglish : greetingsInKorean}
        <p>There's no better tomorrow unless I code today; hustle</p>
        <p>a.k.a. DK</p>
      </div>
    </main>
  );
}

export default Home;
