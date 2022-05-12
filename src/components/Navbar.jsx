import React from 'react'
import {Navbar,Container,Nav,NavDropdown,Button,Form,FormControl} from 'react-bootstrap'
function Navbars() {
  return (
         
    <Navbar bg="dark" variant='dark' expand="lg">
    <Container fluid>
    <Navbar.Brand href="#">Resturant</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">About</Nav.Link>
        <NavDropdown title="Menu" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Main Dishes</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Starters</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Ice Creams & Drinks
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#action6" >
          Contact
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navbars
