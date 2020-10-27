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

export const AboutInKorean = ({ days }) => (
  <div className='about__korean-introduction'>
    <h3>반갑습니다!</h3>
    <h2>프론트엔드 개발자 김명훈 입니다.</h2>
    <p>
      처음 "hello world"를 출력 했을때 부터 제 인생은 개발자로서 무한한 배움의
      여정을 걷게 되었습니다.
      {/* 미국 조지아주 둘루스에 위치한 디지털 마케팅 에이젼시에 프론트엔드 개발자로
      첫 입사하여 많은 개발자들과 함께 프로젝트를 협업하며 QA 와 PM 등 다른
      직군과 함께 문제 해결을 위한 능동적인 소통의 중요성을 알게 되었습니다.
      퇴근 후에는 부족함을 보충과 새로운 기술 습득을 위해 공부하였고 디자이너와
      함께 소통하며 사이드프로젝트도 진행하였습니다. */}
    </p>
    <p>
      {/* 저도 많은 개발자처럼 저도 처음 "hello world" 를 콘솔에 출력한 날이
      기억납니다. 역시 예상하신대로 그날 제가 직접 작성한 코드가 브라우저에서
      작동될때의 그 희열감과 신기함은 이루 말할수가 없었습니다. */}
    </p>
    <p>
      오늘이 공식적으로 프론트엔드 개발자가 된지 정확히 {days}일이 되었습니다.
      그러나 저의 꿈은 프론트엔드 개발자에서 끝내는 것이 아닙니다. 점진적으로
      성장하여 영향력 있는 개발자가 되는 그날까지 hustle 'n code.
    </p>
    <p>
      지금은 전세계적으로 펜더믹이라는 안정적이지 않는 시기에 큰 위험을 무릅쓰고
      결정을 하여 한국에서 개발자의 꿈을 이어가고자 귀국 하였습니다.
    </p>
    <p>기회가 된다면 함께 성장하고 싶습니다. 언제든지 연락주세요!</p>
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
