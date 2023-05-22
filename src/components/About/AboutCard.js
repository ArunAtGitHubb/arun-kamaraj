import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arun </span>
            from <span className="purple"> Tuticorin, India.</span>
            <br />I am a Software developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Game connoisseur, Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Series buff
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>

          

          <p style={{ color: "rgb(155 126 172)" }}>
            "சென்ற இடத்தால் செலவிடா தீதொரீஇ <br />
            நன்றின்பால் உய்ப்ப தறிவு 😏!"{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
