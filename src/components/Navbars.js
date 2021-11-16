import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/pin.jpg';
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom";


function Navbars() {
  let user=sessionStorage.getItem('user')
  let name=sessionStorage.getItem('name')
  let uid=sessionStorage.getItem('uid')

  if(user) {
    
    return (


      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="Navbar">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} classname='App-logo' alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
  
            <Nav.Link as={Link} to="/gallery"><b>Gallery</b></Nav.Link>
            <Nav.Link as={Link} to="/about"><b>About</b></Nav.Link>
            <Nav.Link as={Link} to="/buss"><b>Business</b></Nav.Link>
            <Nav.Link as={Link} to="/upload"><b>Upload Image</b></Nav.Link>
            <Nav.Link as={Link} to="/view"><b>View Image</b></Nav.Link>
  
          </Nav>
        </Navbar.Collapse>
        <Nav.Link as={Link} to="/logout"><b>LogOut</b></Nav.Link>
      </Navbar>
  
  
    )
     
  }

  else{
    return (


      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="Navbar">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} classname='App-logo' alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
  
            {/* <Nav.Link as={Link} to="/"><b>Home</b></Nav.Link> */}
            <Nav.Link as={Link} to="/gallery"><b>Gallery</b></Nav.Link>
            <Nav.Link as={Link} to="/about"><b>About</b></Nav.Link>
            <Nav.Link as={Link} to="/buss"><b>Business</b></Nav.Link>
  
          </Nav>
        </Navbar.Collapse>
        <Nav.Link as={Link} to="/login"><b>Login</b></Nav.Link>
      </Navbar>
  
  
    )

  }
  
}

export default Navbars;