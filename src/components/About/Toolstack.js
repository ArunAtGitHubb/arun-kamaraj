import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiKalilinux,
  SiWindows,
  SiVisualstudiocode,
  SiIntellijidea,
  SiVisualstudio,
  SiPostman,
  SiHeroku,
  SiAndroidstudio,
  SiCpanel,
  SiTorbrowser,
  SiVercel,
  SiGnubash
} from "react-icons/si";


const OS = () => {
  return <>
  <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} />
      <Col xs={4} md={2} />
  </>
}

const IDE = () => {
  return <>
    <Col xs={4} md={2} className="tech-icons">
      <SiAndroidstudio />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiVisualstudiocode />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiPostman />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiIntellijidea />
    </Col>
    <Col xs={4} md={2}/>
  </>
}

const Hosting = () => {
  return <>
    <Col xs={4} md={2} className="tech-icons">
      <SiCpanel />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiVercel />
    </Col>
  </>
}

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OS />
      <IDE />
      <Hosting />
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
      </Col>
    </Row>
  );
}

export default Toolstack;
