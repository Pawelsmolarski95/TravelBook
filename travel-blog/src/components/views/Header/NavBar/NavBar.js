import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
          <Navbar bg="dark" variant="dark" >
            <Container className="d-flex justify-content-between">
              <Navbar.Brand href="#home">Your Travel Blog</Navbar.Brand>
              <Nav >
                  <Nav.Link  as={NavLink} to="/">Home</Nav.Link>
                  <Nav.Link  as={NavLink} to="/about">About</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
        
    )
}

export default NavBar;