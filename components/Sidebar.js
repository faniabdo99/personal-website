import React from "react";
import PersonalPhoto from "../images/personal.jpg";
import SocialList from "./SocialList/Index";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCake,
  faEnvelope,
  faMapLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Badge from "./Partials/Badge";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Image
        src={PersonalPhoto}
        className="sidebar__personal-photo"
        alt="Picture of Abdulrahman Fani"
      />
      <h1 className="sidebar__personal-name">Abdulrahman Fani</h1>
      <div className="text-center mb-4">
        <Badge text="Software Developer" />
      </div>
      <SocialList />
      <div className="sidebar__contact-information mb-4">
        <ul>
          <li>
            <span className="sidebar__icon-container">
              <FontAwesomeIcon className="phonenumber-icon" icon={faPhone} />
            </span>
            <p>
              <span>Phone</span>
              <span class="sidebar__contact-information__value">
                <a
                  href="https://wa.me/+201151411867"
                  rel="noreferrer"
                  target="_blank"
                >
                  +20 115 1411 867
                </a>
              </span>
            </p>
          </li>
          <li>
            <span className="sidebar__icon-container">
              <FontAwesomeIcon className="email-icon" icon={faEnvelope} />
            </span>
            <p>
              <span>Email</span>
              <span class="sidebar__contact-information__value">
                <a href="mailto:abdulrahman@naqrah.net" rel="noreferrer">
                  abdulrahman@naqrah.net
                </a>
              </span>
            </p>
          </li>
          <li>
            <span className="sidebar__icon-container">
              <FontAwesomeIcon className="location-icon" icon={faMapLocation} />
            </span>
            <p>
              <span>Location</span>
              <span class="sidebar__contact-information__value">
                Egypt, Cairo
              </span>
            </p>
          </li>
          <li>
            <span className="sidebar__icon-container">
              <FontAwesomeIcon className="birthday-icon" icon={faCake} />
            </span>
            <p>
              <span>Birthday</span>
              <span class="sidebar__contact-information__value">
                June 19, 1999
              </span>
            </p>
          </li>
        </ul>
      </div>
      <a
        className="cta-button"
        download="AdbulrahmanFaniCV"
        href="/cv/Abdulrahman_Fani_CV.pdf"
      >
        Download CV
      </a>
    </div>
  );
};
export default Sidebar;
