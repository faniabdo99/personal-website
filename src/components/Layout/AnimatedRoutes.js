import React from "react";
import About from '../Pages/About';
import Resume from '../Pages/Resume';
import Contact from '../Pages/Contact';
import Portfolio from '../Pages/Portfolio';
import Blog from '../Pages/Blog';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
}
export default AnimatedRoutes;