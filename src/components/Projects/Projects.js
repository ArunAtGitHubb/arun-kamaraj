import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import snTech from "../../Assets/Projects/SnTech.png";
import reactCoffe from "../../Assets/Projects/react_coffe_warhouse.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isMobile={true}
              imgPath={snTech}
              isBlog={false}
              title="Construction Lising App"
              description="Construction Listing is an exciting project that revolves around a mobile application designed to provide users with a seamless experience for viewing captivating construction designs."
              ghLink="https://github.com/ArunAtGitHubb/releases"
              demoLink="https://github.com/ArunAtGitHubb/releases"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactCoffe}
              isBlog={false}
              title="React Coffee Warehouse"
              description="In this project I've integrated React-Redux to existing project, also added duplicate request cancellation, token validation with a help of Axios."
              ghLink="https://github.com/ArunAtGitHubb/react-coffee-warhouse"
              demoLink="https://github.com/ArunAtGitHubb/react-coffee-warhouse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Find More on my GitHub Repo"
              description="Kinda, lazy to load all the projects in here 😅, Checkout my all the project repo in my profile"
              ghLink="https://github.com/ArunAtGitHubb/"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
