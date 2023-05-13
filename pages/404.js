import React from "react";
import HeaderTitle from "../components/Partials/HeaderTitle";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Custom404() {
    return (
        <motion.div
          className="error-page"
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
          <HeaderTitle text="Page Not Found" />
          <p className="error-page__description">
            How did you arrive here anyways?
          </p>
          <Link activeclassname="active" className="nav-link" href="/">
              Homepage
            </Link>
        </motion.div>
      );
  }