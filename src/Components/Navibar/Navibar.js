import { Navbar, Button, Nav, Link, Container, NavDropdown } from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import s from './Navibar.module.css';
import styled from 'styled-components';

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #adb1b8;
    &:hover {
      color: white
    }
  }`

const Navibar = () => {

  return (
      <Styles>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
          <Nav.Link><NavLink to='/Home'>Home</NavLink></Nav.Link>              
          <Nav.Link><NavLink to='/users'>Users</NavLink></Nav.Link>
          <Nav.Link><NavLink to='/about'>about </NavLink></Nav.Link>
      <Nav.Link><NavLink to='/Photo'>Photo </NavLink></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
      </Navbar>
      </Styles>
    )
    
}

export default Navibar;




// <Nav.Link href="#features">Users</Nav.Link>
//       <Nav.Link href="#pricing">about</Nav.Link>