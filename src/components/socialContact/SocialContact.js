import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function SocialContact() {
  return (
    <div className='social-contact'>
      <div className='social-contact__container'>
        <a href='mailto:hola.hoon@gmail.com'>
          <SiGmail />
          <span>hola.hoon@gmail</span>
        </a>
        <a
          href='https://github.com/holahoon'
          target='_blank'
          rel='noopener noreferrer'
        >
          <RiGithubLine />
          <span>github</span>
        </a>
        <a
          href='https://www.linkedin.com/in/holahoon/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
          <span>linkedin</span>
        </a>
      </div>
    </div>
  );
}

export default SocialContact;
