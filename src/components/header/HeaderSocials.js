import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://youtube.com" target="_blank">
        <AiFillYoutube />
      </a>
      <a href="https://facebook.com" target="_blank">
        <AiFillFacebook />
      </a>
      <a href="https://github.com" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
