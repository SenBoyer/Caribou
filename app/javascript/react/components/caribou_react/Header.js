import React from 'react'
import {Nav, Form, FormControl, Button, Navbar} from 'react-bootstrap'

const Header = ()  => {
    return (
        <Navbar style={{background: "orange"}} variant="dark">
        <Navbar.Brand href="/">Caribou</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">My Profile</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    )
}

export default Header
