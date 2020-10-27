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
    <h3>Hey there! thanks for stopping by</h3>
    <h2>I'm a front-end developer, David Kim.</h2>
    <p>
      It all started with one line of "hello world" that changed my entire life
      to walk the 'infinite learning journey' of a developer.
    </p>
    <p>
      In October 2019, at a digital marketing agency where I took my first
      professional step as a developer, I have built strong trusts and
      relationships with other team members - not just with developers, but with
      QAs or PMs. Outside of work, I spent my spare time studying or worked on
      side projects with a designer(but of course I did other entertaining
      things too =)).
    </p>
    <p>
      Lately I've been working mostly in ReactJS after being mesmerized by the
      beauty of its own unique ecosystem, especially the option to use JSX along
      with an animation to improve the boring UX. But, It does not just stop
      there. I'm currently planning on learning React Native by taking an
      advantage of existing React knowledge. Of course that's not it, because
      I'm eager to learn other new stacks to solve different types of problems
      we may face. Therefore my main motto is hustle and code.
    </p>
    <p>
      In the midst of an awful global pandemic (COVID 19), I have made up my
      mind to take a risk to leave America and settle in South Korea to seek
      opportunities as a developer and experience new/different life style.
    </p>
    <p>
      <span>"</span>
      I'm currently open & actively seeking for opportunities to grow together.
      So, don't hesitate to contact me!
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
