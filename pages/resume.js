import { faFlask, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import HeaderTitle from "../components/Partials/HeaderTitle";
import { motion } from "framer-motion";
import ResumeCard from "../components/Partials/ResumeCard";
import Badge from "../components/Partials/Badge";
const Resume = () => {
  const education = [
    {
      date: "2014 - 2015",
      title: "High School",
      position: "Faisalyah School",
    },
    {
      date: "2013 - 2014",
      title: "High School",
      position: "Um Alqurra",
    },
  ];
  const experience = [
    {
      date: "2021 - NOW",
      title: "Nile University",
      position: "Senior Software Developer",
    },
    {
      date: "2020 - NOW",
      title: "TrèsJolie Jewelry",
      position: "Digital Transformation Advisor",
    },
    {
      date: "2019 - 2021",
      title: "Picturate ME",
      position: "Web Development Team Lead",
    },
    {
      date: "2017 - 2019",
      title: "BizBuzz Digital",
      position: "Senior Backend Developer",
    },
    {
      date: "2017 - NOW",
      title: "Naqrah",
      position: "Founder",
    },
  ];
  const technologies = [
    "Laravel",
    "PHP",
    "Figma",
    "JavaScript",
    "ReactJs",
    "Ruby on Rails",
    "Linux",
    "AWS",
    "GIT",
    "SCRUM",
    "APIs",
  ];
  return (
    <motion.div
      className="resume-page"
      initial={{
        y: "50%",
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      exit={{
        y: "50%",
        opacity: 0,
        transition: { duration: 0.1 },
      }}
      transition={{ duration: 0.3 }}
    >
      <HeaderTitle text="Resume" />
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <h3 className="resume-page__section-title">
              <FontAwesomeIcon icon={faGraduationCap} /> Education
            </h3>
            {education.map((item) => (
              <ResumeCard resume={item} />
            ))}
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <h3 className="resume-page__section-title">
              <FontAwesomeIcon icon={faFlask} /> Experience
            </h3>
            {experience.map((item) => (
              <ResumeCard resume={item} />
            ))}
          </Col>
        </Row>
        <Row className="my-5">
          <Col lg={6} md={6} sm={12} xs={12}>
            <h3 className="resume-page__section-title">Working Skills</h3>
            <div className="resume__progress-bar">
              <p className="d-flex justify-content-between">
                Front End <span className="text-right">70%</span>
              </p>
              <ProgressBar variant="info" now={70} />
            </div>
            <div className="resume__progress-bar">
              <p className="d-flex justify-content-between">
                Back End <span className="text-right">85%</span>
              </p>
              <ProgressBar variant="warning" now={85} />
            </div>
            <div className="resume__progress-bar">
              <p className="d-flex justify-content-between">
                UI/UX Design <span className="text-right">60%</span>
              </p>
              <ProgressBar variant="danger" now={60} />
            </div>
            <div className="resume__progress-bar">
              <p className="d-flex justify-content-between">
                Technical SEO <span className="text-right">90%</span>
              </p>
              <ProgressBar variant="success" now={90} />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <h3 className="resume-page__section-title">Technologies</h3>
            <div className="w-100">
              {technologies.map((item) => (
                <Badge text={item} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};
export default Resume;
