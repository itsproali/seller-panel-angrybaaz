import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useLocation } from "react-router-dom";
import styles from "../../styles/Navbar.module.css";

const TopNav = () => {
  const currentLocation = useLocation().pathname;
  const links = [
    {
      text: "Dashboard",
      path: "/",
    },
    {
      text: "Profile",
      path: "/profile",
    },
    {
      text: "Orders",
      path: "/orders",
    },
    {
      text: "Enquiry",
      path: "/enquiry",
    },
    {
      text: "Revenue",
      path: "/revenue",
    },
    {
      text: "Store",
      path: "/store",
    },
  ];

  return (
    <>
      <Navbar expand="lg" className={styles.nav}>
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" className={styles.navbrand}>
              <span>Angry</span>
              <span>Baaz</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-md"
            className={styles.navtoggle}
          />
          <Navbar.Offcanvas placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                AngryBaaz
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {links.map((link, i) => (
                  <Nav.Link key={i}>
                    <Link className={`${styles.navlink} ${currentLocation === link.path && styles.activelink} `} to={link.path}>
                      {link.text}
                    </Link>
                  </Nav.Link>
                ))}
                <Nav.Link>
                  <button className={styles.logout}>Log out</button>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNav;
