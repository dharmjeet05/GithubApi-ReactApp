import React from "react";

// Styles
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-info text-white text-uppercase fixed-bottom p-3"
    >
      Dharmjeet.com Github search App with Firebase
    </Container>
  );
};

export default Footer;
