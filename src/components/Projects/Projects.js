import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import devcon from "../../Assets/Projects/svvvdevcon.png";
import noteforge from "../../Assets/Projects/noteforge.png";
import beercard from "../../Assets/Projects/beercard.png";

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
              imgPath={devcon}
              isBlog={false}
              title="SVVV DevConnector"
              description="The space for developers to showcase their skills, share knowledge, and collaborate on projects. A global community of developers, where developers can connect, collaborate, and thrive in their professional journeys."
              ghLink="https://github.com/GunjeetNimbalkar/SVVV_DevConnector"
              demoLink="https://svvv-devconnector.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noteforge}
              isBlog={false}
              title="NoteForge"
              description="An intuitive notes app “Note Forge” with React that will help you stay organized and productive. This app can: • Create a new note • Search for notes • Delete a note"
              ghLink="https://github.com/GunjeetNimbalkar/NoteForge-ReactApp"
              demoLink="https://noteforge.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beercard}
              isBlog={false}
              title="BeerCard"
              description="Beercard App is a app to fetch data from third party site about beers, includes search bar,use of axios and await function. "
              ghLink="https://github.com/GunjeetNimbalkar/BeerCard"
              demoLink="https://beercard.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
