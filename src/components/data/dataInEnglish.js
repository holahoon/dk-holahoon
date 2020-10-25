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
      console logged "hello world" and as you might have guessed, it was the day
      when I was completely mesmerized by the beauty of seeing my very own
      written code working on the browser
    </p>
    <p>
      Well, today marks the {days}
      <sup>{ordinal}</sup> day since I officially became a front-end developer
      and I don't plan on just staying as a front-end developer, but I dream of
      growing as a "damn good developer". 'Til that day comes, hustle n' code.
    </p>
    <p>
      In the midst of an awful global pandemic(COVID 19), I have decided to
      leave Atlanta, GA and move back to the country where I was raised most of
      my youth and teenage years- Seoul, Republic of Korea.
    </p>
    <p>
      I'm currently open for opportunities to grow together. Don't hesitate to
      contact me!
    </p>
  </div>
);

export const BlogInEnglish = () => (
  <div>
    <h2>I'm sorry..</h2>
    <p>this page is under construction</p>
    <LottieImage />
    <p>I'll be back with more awesome contents!</p>
  </div>
);
