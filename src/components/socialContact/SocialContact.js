import React from "react";

import { HiOutlineMail } from "react-icons/hi";
import { RiGithubLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

function SocialContact() {
  return (
    <div className='social-contact'>
      <span>
        <HiOutlineMail />
        <RiGithubLine />
        <FaLinkedinIn />
      </span>
    </div>
  );
}

export default SocialContact;
