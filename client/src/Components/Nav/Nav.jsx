import React from "react";

const Nav = () => {
  return (
    <div>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="*">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/izlandgirls">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/reevesbbq">Link</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Nav;
