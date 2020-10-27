import React from "react";

import LottieImage from "components/lottieImage/LottieImage";

export const IntroHeaderInKorean = () => (
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
);

export const IntroSubHeaderInKorean = () => (
  <p className='korean-message'>오늘 한줄의 코드로 밝아질 내일을 위하여,</p>
);

export const AboutInKorean = () => (
  <div className='about__korean-introduction'>
    <h3>반갑습니다!</h3>
    <h2>프론트엔드 개발자 김명훈 입니다.</h2>
    <p>
      처음 "hello world"를 출력 했을때 부터 제 인생은 개발자로서 무한한 배움의
      여정을 걷게 되었습니다.
    </p>
    <p>
      2019년 10월 어느 디지털 마케팅 에이젼시에서 설레는 마음으로 첫 걸음을
      내디뎠습니다. 그곳에서 다른 팀 멤버들 - 개발자로만 국한되지 않고 QA와 PM
      들과도 신뢰있는 관계를 유지했습니다. 퇴근 시간에는 공부도 하며 디자이너와
      사이드 프로젝트도 함께 진행하기도 했습니다(물론 다른 재미난것도 했습니다
      =)).
    </p>
    <p>
      요즘은 ReactJS의 ecosystem, 특히 JSX를 쓸수있는 그 ReactJS만의 매력에 푹
      빠져 ReactJS와 딱딱한 UX를 개선해줄 애니메이션을 를 가장 많이 사용하고
      있습니다. 그러나 거기서만 멈추지 않습니다. 현재 ReactJS의 지식을 가지고
      React Native를 배우려고 계획하고 있습니다. 물론 거기서 끝나는 것이 아닌
      상황에 따라, 문제에 따라 다른 스택도 배우고 싶습니다. 고로 제 메인 모토가
      바로 hustle and code 입니다.
    </p>
    <p>
      지금은 전세계적으로 펜더믹이라는 안정적이지 않는 시기에 큰 위험을 무릅쓰고
      결정을 하여 한국에서 개발자의 꿈을 이어가고자 귀국 하였습니다.
    </p>
    <p>
      <span>"</span>기회가 된다면 함께 성장하고 싶습니다. 언제든지 연락주세요!
      <span>"</span>
    </p>
  </div>
);

export const BlogInKorean = () => (
  <div>
    <h2>죄송합니다..</h2>
    <p>이 페이지는 아직 작업중 입니다</p>
    <LottieImage />
    <p>좀 더 멋진 컨텐츠로 돌아오겠습니다!</p>
  </div>
);
