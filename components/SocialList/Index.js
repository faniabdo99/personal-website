import React from "react";
import SocialItem from "./SocialItem";
import { faFacebook, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const SocialList = () => {
  const SocialLinks = [
    {
      url: "https://facebook.com/faniabdo99",
      iconClass: faFacebook,
      colorClass: "facebook-color",
    },
    {
      url: "https://github.com/faniabdo99",
      iconClass: faGithub,
      colorClass: "github-color",
    },
    {
      url: "https://twitter.com/Abdofani",
      iconClass: faTwitter,
      colorClass: "twitter-color",
    },
    {
      url: "https://linkedin.com/in/abdofani99/",
      iconClass: faLinkedinIn,
      colorClass: "linkedin-color",
    },
  ];
  return (
    <ul className="sidebar__social-list">
      {SocialLinks.map((item, id) => (
        <SocialItem
          key={id}
          url={item.url}
          iconClass={item.iconClass}
          colorClass={item.colorClass}
        />
      ))}
    </ul>
  );
};
export default SocialList;
