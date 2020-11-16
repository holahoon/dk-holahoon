import React from "react";

import LottieImage from "components/lottieImage/LottieImage";

export const IntroHeaderInEnglish = () => (
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

export const IntroSubHeaderInEnglish = () => (
  <p className='english-message'>
    'til one line of code today brightens up tomorrow,
  </p>
);

export const AboutInEnglish = () => (
  <div className='about__english-introduction'>
    <h3>Hey there! Thanks for stopping by.</h3>
    <h2>I'm a front-end developer, David Kim.</h2>
    <p>
      It all started with "hello world" that changed my entire life to walk the
      'infinite learning journey' of a developer.
    </p>
    <p>
      At a digital marketing agnecy located in Duluth, GA where I took my first
      step as a front-end developer, I have built strong trust and relationships
      with coworkers and by maintaining clear communications to make sure all
      the work tickets get delivered on time. Outside of work, I always look for
      opportunities to improve my skills by learning and building side projects.
    </p>
    <p>
      I have also experienced collaborating with a designer on developing
      projects which helped me to open my eyes to pay closer attention to
      details. I usually decide to use ReactJS as it is my all-time favorite
      stack because I simply cannot resist the beauty of JSX.
      <span role='img' aria-label='rock'>
        🤘
      </span>
    </p>
    <p>
      In the midst of an awful global pandemic (COVID 19), I have decided to
      take the risk to leave America and settle in South Korea to seek
      opportunities as a developer and experience new/different life style.
      <span role='img' aria-label='korea'>
        🇰🇷
      </span>
    </p>
    <p>
      <span>"</span>
      I'm currently open & actively seeking for opportunities to grow together.{" "}
      <span role='img' aria-label='up-side-smile'>
        🙃
      </span>
      Don't hesitate to contact me!
      <span>"</span>
    </p>
  </div>
);

export const BlogInEnglish = () => (
  <div>
    <h2>I'm sorry..</h2>
    <p>this page is under development</p>
    <LottieImage />
    <p>I'll be back with more awesome contents!</p>
  </div>
);
