import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNordvpn,
  SiTorbrowser,
  SiDuckduckgo,
} from "react-icons/si";

function BrowserStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTorbrowser />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDuckduckgo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNordvpn />
      </Col>
    </Row>
  );
}

export default BrowserStack;
