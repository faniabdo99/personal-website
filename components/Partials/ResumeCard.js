import React from "react";
const ResumeCard = ({ resume }) => {
  return (
    <div className="resume-card">
      <p className="resume-card__date">{resume.date}</p>
      <h3 className="resume-card__title">{resume.title}</h3>
      <p className="resume-card__position">{resume.position}</p>
    </div>
  );
};
export default ResumeCard;
