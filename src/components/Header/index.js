import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './styleHead.css';

function index() {
  return (
    <Navbar bg="dark" expand="lg" variant='dark' fixed='top'>
    <Container>

      <Navbar.Brand><Link to='/'>The World of Star Wars</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">

          <Nav.Link> <Link to='/'>Home</Link></Nav.Link>

          <Nav.Link> <Link to='/Login'>Login</Link></Nav.Link>

          <Nav.Link> <Link to='/Gender'>Genero</Link></Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default index