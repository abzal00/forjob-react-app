import React from "react";
import { Nav, Navbar,Container } from "react-bootstrap";



const Headers = (props) => {
    return <div>
   <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MySide</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="#pricing">Dialogs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>   
    </div>
}

export default Headers