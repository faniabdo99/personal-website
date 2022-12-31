import React from "react";
import HeaderTitle from "../components/Partials/HeaderTitle";
import ContactForm from "../components/Partials/ContactForm";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div
      className="contact-us-page"
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
      <HeaderTitle text="Contact Us" />
      <p className="contact-us-page__description">
        I'm always intersted in disucssing new things. Feel free to contact me
        ay any time!
      </p>
      <ContactForm />
    </motion.div>
  );
};
export default Contact;
