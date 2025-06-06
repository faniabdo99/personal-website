import React from "react";
import HeaderTitle from "../Partials/HeaderTitle";
import '../../styles/scss/pages/about.scss';
import { faCompassDrafting, faDatabase, faGear } from "@fortawesome/free-solid-svg-icons"; 
import SkillCard from "../Partials/SkillCard";
import { Col, Row } from "react-bootstrap";
import { faGit, faGoogle } from "@fortawesome/free-brands-svg-icons";
import SubHeader from "../Partials/SubHeader";
import { motion } from 'framer-motion';
const About = () => {
    const skills = [
        {
            icon: faCompassDrafting,
            title: "Front End",
            description: "I use React.js, Bootsrap, Sass, Tailwind, and more to build responsive and high performance websites.",
            colorClass: "frontend-color"
        },
        {
            icon: faGear,
            title: "Back End",
            description: "I love building backends! I use Laravel (PHP) & Ruby on Rails to power scalable APIs, MySql & Postgress for Databases.",
            colorClass: "backend-color"
        },
        {
            icon: faDatabase,
            title: "DevOps & Infrastructure",
            description: "I Worked with many service providers to build a scalable infrastructure (AWS, DigotalOcean, Linode ...etc).",
            colorClass: "do-if-color"
        },
        {
            icon: faGit,
            title: "Version Control",
            description: "The standards wins, GIT is my favorite version control system. When it comes to the cloud, I use Github & somethimes Gitlab.",
            colorClass: "vc-color"
        },
        {
            icon: faGear,
            title: "Server Management",
            description: "I have a long experince in server management. I use Docker, Apache, and more to build a scalable infrastructure.",
            colorClass: "server-management-color"
        },
        {
            icon: faGoogle,
            title: "Technical SEO",
            description: "I'm an expert in On-Page technical SEO, I've learnet how to apply the best structre and SEO techniques to improve websites ranking.",
            colorClass: "seo-color"
        }
    ];
    return (
        <motion.div className="about-us-page" 
                    initial={{
                        y: "50%",
                        opacity:0,
                        scale:0.5,
                    }} 
                    animate={{
                        y: 0,
                        opacity:1,
                        scale:1,
                    }} 
                    exit={{
                        y: "50%",
                        opacity:0,
                        transition: { duration: 0.1 },
                    }}
                    transition={{ duration: 0.3 }}
                    >
            <HeaderTitle text="About Me" />
            <p className="about-us-page__decription">
                I am a Full-Stack software developer with around 10 Years of professional experience in the field.
                <br />
                I was born and raised in Aleppo, Syria, Proud to say that I've never graduated from a university, I am a self-taught developer.
            </p>
            <SubHeader text="My Skills" />
            <Row className="mb-5">
                {
                    skills.map((item) => {
                        return (
                            <Col lg={6} md={6} sm={12} xs={12} >
                                <SkillCard skill={item} />
                            </Col>
                        )
                    })
                }
            </Row>
            {/*TODO: Add list of clients here as logo parade or slider*/}
        </motion.div>
    );
}
export default About;