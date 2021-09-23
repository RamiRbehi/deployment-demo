import React, { useState } from "react";
import '../CSS/Navigation.css';
import Icon from "../Images/icon2.png";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


function Navigation() {

    const [navbar, setNavbar] =useState(false);
  
    const changeBackground = () => {
      console.log(window.scrollY);
      if(window.scrollY >= 80) {
        setNavbar(true)
      } else {
        setNavbar(false);
      }
    }
  
    window.addEventListener("scroll", changeBackground);

  return <div>
    <Navbar collapseOnSelect
    id="menu"
    expand="lg" 
    fixed="top"
    className={navbar ? "navbar active" : "navbar"}>
  <Container>
  <Navbar.Brand href="/">
    <img src={Icon} alt="home icon"
    width="70"
    height="50" />
  </Navbar.Brand>
  <Navbar.Toggle className="navbar-button" aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto navs" activeKey="/home">
    <Nav.Link className="single-nav" href="/">Acceuil</Nav.Link>
    <Nav.Link className="mt-0 single-nav" href="#about">A propos</Nav.Link>
    <Nav.Link className="single-nav" href="#services">Services</Nav.Link>
    <Nav.Link className="single-nav" href="#portfolio">Portfolio</Nav.Link>
    <Nav.Link className="single-nav" href="#temoignages">Témoignages</Nav.Link>
    <Nav.Link className="single-nav" href="#contact">Contact</Nav.Link>      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
}

export default Navigation;