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
      Developed by{" "}
      <a
        href="https://dharmjeet.com"
        rel="noreferrer"
        target="_blank"
        className="text-white"
      >
        Dharmjeet.com
      </a>
    </Container>
  );
};

export default Footer;
