import React, { useContext } from "react";

import WrapperTransition from "components/wrapperContainerTransition/WrapperTransition";
import useWindowsHeight from "hooks/useWindowsHeight";
import { LanguageContext } from "hooks/LanguageContext";

function Home() {
  const windowInnerHeight = useWindowsHeight();
  const { languageHandler } = useContext(LanguageContext);
  const isLanguageKorean = languageHandler[0];

  // Greetings message in en/kr
  const greetings = isLanguageKorean ? (
    <div className='home__korean-container'>
      <h3 className='korean-greeting'>반갑습니다!</h3>
      <h2 className='korean-title'>
        <span className='korean-title__fe'>
          프론트엔드 개발자<span className='red-circle'></span>
        </span>
      </h2>
      <h1 className='korean-name'>
        <span className='korean-name__david'>
          <a href='mailto:hola.hoon@gmail.com'>김명훈</a>
          <span className='red-line'></span>
        </span>{" "}
        입니다
      </h1>
    </div>
  ) : (
    <div className='home__english-container'>
      <h3 className='english-greeting'>Hi there!</h3>
      <h1 className='english-name'>
        I'm{" "}
        <span className='english-name__david'>
          <a href='mailto:hola.hoon@gmail.com'>David</a>
          <span className='red-line'></span>
        </span>
        ,
      </h1>
      <h2 className='english-title'>
        a{" "}
        <span className='english-title__fe'>
          Front-end Developer<span className='red-circle'></span>
        </span>
      </h2>
    </div>
  );

  // Sub message in en/kr
  const message = isLanguageKorean ? (
    <p className='korean-message'>오늘 한줄의 코드로 밝아질 내일을 위하여</p>
  ) : (
    <p className='english-message'>
      'til my one line of code today brightens up tomorrow
    </p>
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
