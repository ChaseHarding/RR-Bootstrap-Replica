import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home"><img src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" /> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={{color: "#343538"}} href="#login">Login</Nav.Link>
            <Button variant="success" style={{fontSize: "18px"}}>Sign Up</Button>{' '}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;