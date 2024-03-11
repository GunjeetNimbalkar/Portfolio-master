import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone, I am <span className="purple">Gunjeet Nimbalkar </span>
            from <span className="purple"> Ujjain, India.</span>
            <br />
            I am currently pursuing B.Tech in CSE at SVVV,Indore.
            <br />
            I am Intern at 10xTech in Web Development & Technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Synthesizer
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving puzzles
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Push yourself, because no one else is going to do it for you!"{" "}
          </p>
          <footer className="blockquote-footer">Gunjeet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
