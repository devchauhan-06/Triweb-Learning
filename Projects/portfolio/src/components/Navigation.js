import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Style from './Navigation.module.css'

const Navigation = () => {
    return (
        <>
        <div className={Style.contain}>

            <Navbar fixed="top" expand="md"  bg="black" data-bs-theme="dark">
              
                    <Navbar.Brand href="#Home"  className={Style.logo} >PORTFOLIO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 

                    <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
              bg="black" data-bs-theme="dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                 Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className={Style.nav_elements} href="#Home">Home</Nav.Link>
                  <Nav.Link className={Style.nav_elements} href="#About">About</Nav.Link>
                  <Nav.Link className={Style.nav_elements} href="#Services">Services</Nav.Link>
                  <Nav.Link className={Style.nav_elements} href="#Projects">Projects</Nav.Link>
                  <Nav.Link className={Style.nav_elements} href="#Reviews">Reviews</Nav.Link>
                  <Nav.Link className={Style.nav_elements} href="#Contact">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
             
            </Navbar>
        </div>
        </>

    )
}

export default Navigation
