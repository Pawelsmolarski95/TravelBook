import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import styles from  './NavBar.module.scss'

const NavBar = () => {
    return (
        <>
          <Navbar bg="dark" variant="dark" className="rounded ">
            <Container className="d-flex flex-column flex-sm-column  flex-md-column flex-lg-row flex-xl-row justify-content-between">
              <Navbar.Brand href="#home">Your Travel Blog</Navbar.Brand>
              <Nav className='flex-column flex-sm-column  flex-md-column flex-lg-row flex-xl-row' >
                  <Nav.Link  as={NavLink} to="/">Home</Nav.Link>
                  <Nav.Link  as={NavLink} to="/about">About</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
        
    )
}

export default NavBar;