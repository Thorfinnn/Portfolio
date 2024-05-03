import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Taher Barwaniwala </span>
            from <span className="purple"> Surat, India.</span>
            <br />
            I interned as a React.js Developer at <a className="purple text-decoration-none" href="http://hkiinfotech.com/" rel="noreferrer" target="_blank">HKI Infotech</a> .
            <br />
            I have completed BE  in Computer Engineering at <a className="purple text-decoration-none" rel="noreferrer" href="https://www.vcet.edu.in/" target="_blank" title="Vidyavardhini's College of Engineering and technology">Vidyavardhini's College of Engineering and Technology affiliated with Mumbai University</a>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, craft with passion!"{" "}
          </p>
          <footer className="blockquote-footer"><a href="https://www.linkedin.com/in/taher-barwaniwala" className="fw-bold purple text-decoration-none" target="_blank" rel="noreferrer">Taher Barwaniwala</a></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
