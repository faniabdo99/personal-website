import React from "react";
import HeaderTitle from "../components/Partials/HeaderTitle";
import ProjectCard from "../components/Partials/ProjectCard";
import { motion } from "framer-motion";
//Images
import AI4Dev from "../images/portfolio/ai4dev.png";
import BosterBio from "../images/portfolio/bosterbio.png";
import Naqrah from "../images/portfolio/naqrah.png";
import IHB from "../images/portfolio/ihb.png";
import Shifa from "../images/portfolio/shifa.jpg";
import Peppers from "../images/portfolio/peppers.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Naqrah",
      tags: ["Laravel", "Full Stack", "CMS"],
      url: "https://naqrah.net",
      image: Naqrah,
    },
    {
      title: "Iraqi Heritage Noats",
      tags: ["Laravel", "Backend", "CMS"],
      url: "https://iraqiheritageboatclubs.net/",
      image: IHB,
    },
    {
      title: "Shifa Hospital",
      tags: ["Laravel", "Full Stack", "Booking"],
      url: "https://shifaegypt.com/",
      image: Shifa,
    },
    {
      title: "Peppers Luxury Closet",
      tags: ["Laravel", "Full Stack", "eCommerce"],
      url: "https://naqrah.net",
      image: Peppers,
    },
    {
      title: "AI4Dev",
      tags: ["Static", "Landing Page"],
      url: "https://www.ai4dev2020.com/",
      image: AI4Dev,
    },
    {
      title: "BosterBio",
      tags: ["Frontend", "USA"],
      url: "https://www.bosterbio.com/",
      image: BosterBio,
    },
  ];
  return (
    <motion.div
      className="portfolio-page"
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
      <HeaderTitle text="Portfolio" />
      <div className="portfolio-page__gallery">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </motion.div>
  );
};
export default Portfolio;
