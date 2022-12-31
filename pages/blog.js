import React from "react";
import HeaderTitle from "../components/Partials/HeaderTitle";
import { motion } from "framer-motion";
const Blog = () => {
  return (
    <motion.div
      className="blog-page"
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
      <HeaderTitle text="Blog" />
      <p className="blog-page__description">
        I&apos;m not a copywritter by any means, But sometimes I write about
        things that I find interesting.
        <br />
        <br />
        <br />
        Seems like I haven&apos;t written anything yet.
      </p>
    </motion.div>
  );
};
export default Blog;
