import React, { useContext } from "react";

import { LanguageContext } from "hooks/LanguageContext";

function Home() {
  const { languageHandler } = useContext(LanguageContext);
  const language = languageHandler[0];
  const greetingsInEnglish = (
    <>
      <h3>Hi there!</h3>
      <h1>I'm David,</h1>
      <h2>a Frontend Developer</h2>
    </>
  );
  const greetingsInKorean = (
    <>
      <h3>반갑습니다!</h3>
      <h2>프론트엔드 개발자</h2>
      <h1>김명훈 입니다</h1>
    </>
  );

  return (
    <main className='home'>
      {language === "en" ? greetingsInEnglish : greetingsInKorean}
      <p>There's no better tomorrow unless I code today; hustle</p>
      <p>a.k.a. DK</p>
    </main>
  );
}

export default Home;
