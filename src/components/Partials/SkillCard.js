import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/scss/skill-card.scss";
const SkillCard = ({ skill }) => {
    return (
        <div className="skill-card">
            <div className="skill-card__icon">
                <FontAwesomeIcon className={skill.colorClass} icon={skill.icon} />
            </div>
            <div className="skill-card__content">
                <h3 className="skill-card__title">{skill.title}</h3>
                <p className="skill-card__description">{skill.description}</p>
            </div>
        </div>
    );
}
export default SkillCard;