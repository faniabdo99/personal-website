import React from 'react';
import PersonalPhoto from '../images/personal.jpg';
import SocialList from './SocialList/Index';
import '../styles/scss/sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCake, faEnvelope, faMapLocation, faPhone, faDownload } from '@fortawesome/free-solid-svg-icons';
import Badge from './Partials/Badge';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img className="sidebar__personal-photo" src={PersonalPhoto} alt="Abdulrahman Fani" />
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
                            <p>+20 115 1411 867</p>
                        </p>
                    </li>
                    <li>
                        <span className="sidebar__icon-container">
                            <FontAwesomeIcon className="email-icon" icon={faEnvelope} />
                        </span>
                        <p>
                            <span>Email</span>
                            <p>abdulrahman@naqrah.net</p>
                        </p>
                    </li>
                    <li>
                        <span className="sidebar__icon-container">
                            <FontAwesomeIcon className="location-icon" icon={faMapLocation} />
                        </span>
                        <p>
                            <span>Location</span>
                            <p>Egypt, Cairo</p>
                        </p>
                    </li>
                    <li>
                        <span className="sidebar__icon-container">
                            <FontAwesomeIcon className="birthday-icon" icon={faCake} />
                        </span>
                        <p>
                            <span>Birthday</span>
                            <p>June 19, 1999</p>
                        </p>
                    </li>
                </ul>
            </div>
            <a className="cta-button" href="#">
                <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
        </div>
    );
}
export default Sidebar;