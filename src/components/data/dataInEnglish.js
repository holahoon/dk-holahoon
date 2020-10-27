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

export const AboutInEnglish = ({ days, ordinal }) => (
  <div className='about__english-introduction'>
    <h3>Hey there! thanks for stopping by</h3>
    <h2>I'm a front-end developer, David Kim</h2>
    <p>
      It all started with one line of "hello world" that changed my entire life
      to walk the 'infinite learning journey' of a developer.
    </p>
    <p>
      I was never a type of person who liked to learn new things until I met
      JavaSCript (of course HTML and CSS). The beauty of seeing my very own
      written code working on a browser completely mesmerized me to lead me this
      far. My professional career as a front-end developer started in late 2019
      at a digital marketing agency. That became my springboard to...
      {/* Like most of the developers do, I still remember the day when I first
      console logged "hello world" and as you might have guessed, it was the day
      when I was completely mesmerized by the beauty of seeing my very own
      written code working on the browser */}
    </p>
    <p>
      Well, today marks the {days}
      <sup>{ordinal}</sup> day since I officially became a front-end developer
      and I don't plan on just staying as a front-end developer, but I dream of
      growing as a "damn good developer". 'Til that day comes, hustle n' code.
    </p>
    <p>
      In the midst of an awful global pandemic (COVID 19), I have made up my
      mind to take a risk to leave America and settle in South Korea to seek
      opportunities as a developer and experience new/different life style.
    </p>
    <p>
      I'm currently open & actively seeking for opportunities to grow together.
      <br />
      Don't hesitate to contact me!
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
