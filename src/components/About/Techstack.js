import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDart,
  DiMysql,
  DiPhp,
  DiGithub,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiKotlin,
  SiFlutter,
  SiCss3,
  SiBootstrap,
  SiSass,
} from "react-icons/si";

function Techstack() {

  const Core = () => {
    return <>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDart />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin />
      </Col>
    </>
  }

  const FrontEnd = () => {
    return <>
      <Col xs={4} md={2} /> 
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} />
    </>
  }

  const BackEnd = () => {
    return <>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
    </>
  }

  const Styles = () => {
    return <>
    <Col xs={4} md={2} />
    <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiSass />
      </Col>
      <Col xs={4} md={2} />
    </>
  }

  const Utility = () => {
    return <>
    <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} />
    </>
  }

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Core />
      <FrontEnd />
      <BackEnd />
      <Styles />
      <Utility />
    </Row>
  );
}

export default Techstack;
