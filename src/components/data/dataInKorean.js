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
      미국 조지아주 둘루스에 위치한 디지털 마케팅 에이젼시에서 설레는 마음으로
      프론트엔드 개발자로서 첫 걸음을 내디뎠습니다. 그곳에서 동료들과 원활한
      의사소통을 하므로서 참여한 프로젝트에서 주어진 업무 티켓을 제 시간 안에
      마치며 신뢰있는 관계를 유지하였습니다.
    </p>
    <p>
      평소에는 공부와 사이드 프로젝트를 진행합니다. 또한 디자이너와 함께
      작업하여 작은 디테일도 놓치지 않고 구현하며 프로젝트를 진행하곤
      하였습니다. 최근에는 JSX syntax의 유혹을 뿌리치지 못해 보통 ReactJS를
      선호하고 자주 사용합니다. 지금은 자바스크립트의 동적 타입언어의 단점을
      보강하기 위해 TypeScript를 공부 중에 있습니다. 특히 리액트 프로젝트 개발에
      유용하게 활용될 거라 생각합니다.
      <span role='img' aria-label='rock'>
        🤘
      </span>
    </p>
    <p>
      지금은 전세계적으로 펜더믹이라는 안정적이지 않는 시기에 큰 위험을 무릅쓰고
      결정을 하여 한국에서 개발자의 꿈을 이어가고자 귀국 하였습니다.
      <span role='img' aria-label='korea'>
        🇰🇷
      </span>
    </p>
    <p>
      <span>"</span>기회가 된다면 함께 성장하고 싶습니다.{" "}
      <span role='img' aria-label='up-side-smile'>
        🙃
      </span>{" "}
      언제든지 연락주세요!
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
