import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import logo from './assets/img/3d.svg'
import {Link} from 'react-router-dom'
import React from 'react'

const NavBar = () =>{
    return (
    <nav>
    <Navbar bg="light" expand="lg">
      <Container>
        <div className="container__logo">
          <Link to='/'><img className="logo" src={logo} alt="logo" /></Link>
          <h2>Plain</h2>
        </div>
        <Navbar.Brand href="#home"></Navbar.Brand >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to={'/'} className="btn" variant="outline-dark"> Inicio</Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <Link to={'/category/figuras'} className="btn"> Figuras 3D</Link>
              <Link to={'/category/decoracion'} className="btn"> Decoracion</Link>
              <Link to={'/category/herramientas'} className="btn"> Herramientas</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
       < CartWidget />
      </Container>
    </Navbar>
    </nav>
    )
    }

    export default NavBar;