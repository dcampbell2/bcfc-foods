import React from "react";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <div>
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/izlandgirls">Izland Girls</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/reevesbbq">Reeves Souther BBQ</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavBar;
