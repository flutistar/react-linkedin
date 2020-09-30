import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export const AuthHeader = () => {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">LinedIn</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Join now</Nav.Link>
          <Nav.Link href="#features">Sign in</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
