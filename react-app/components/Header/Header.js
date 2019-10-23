import React, { useState } from "react";
import { Navbar, Nav, Row } from "react-bootstrap";
import "./Header.css";
export default function Header() {
  return (
    <div>
      <header>
        <div className="container">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand to="#home">
              <img src={require("../../images/logo-pc.png")} />
            </Navbar.Brand>
            <Navbar.Brand to="#home" className="mr-auto">
              <div className="pride">Pride</div>
              <p className="int-school">International</p>
              <p className="int-school school">School</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <div className="pc-menu pc-menu0">
                  <Nav.Link to="About" className="text-white">
                    About
                  </Nav.Link>
                </div>
                <div className="pc-menu pc-menu0">
                 
                  <Nav.Link to="Campus" className="text-white">
                    Campus
                  </Nav.Link>
                </div>

                <div className="pc-menu pc-menu0">
                  <Nav.Link to="Admissions" className="text-white">
                    Admissions
                  </Nav.Link>
                </div>

                <div className="pc-menu pc-menu0">
                 
                  <Nav.Link to="Gallery" className="text-white">
                    Gallery
                  </Nav.Link>
                </div>

                <div className="pc-menu pc-menu0">
                <Nav.Link to="Contact" className="text-white">
                    Contact
                  </Nav.Link>
                </div>
              </Nav>
             
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    </div>
  );
}
