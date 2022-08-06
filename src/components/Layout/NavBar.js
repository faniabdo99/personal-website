import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// React Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
// Styles
import '../../styles/scss/navbar.scss';
const NavBar = () => {
    return (
        <Navbar className="custom-navbar" expand="lg">
            <Container>
                <NavLink className="navbar-brand" to="/">AbdulrahmanFani</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <FontAwesomeIcon icon={faBars} />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink activeclassname="active" className="nav-link" to="/">About Me</NavLink>
                        <NavLink activeclassname="active" className="nav-link" to="/resume">Resume</NavLink>
                        <NavLink activeclassname="active" className="nav-link" to="/portfolio">Portfolio</NavLink>
                        <NavLink activeclassname="active" className="nav-link" to="/blog">Blog</NavLink>
                        <NavLink activeclassname="active" className="nav-link" to="/contact">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;