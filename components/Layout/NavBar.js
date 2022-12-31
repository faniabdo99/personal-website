import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
// React Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const NavBar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Link className="navbar-brand" href="/">
          AbdulrahmanFani
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link activeclassname="active" className="nav-link" href="/">
              About Me
            </Link>
            <Link activeclassname="active" className="nav-link" href="/resume">
              Resume
            </Link>
            <Link
              activeclassname="active"
              className="nav-link"
              href="/portfolio"
            >
              Portfolio
            </Link>
            <Link activeclassname="active" className="nav-link" href="/blog">
              Blog
            </Link>
            <Link activeclassname="active" className="nav-link" href="/contact">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
