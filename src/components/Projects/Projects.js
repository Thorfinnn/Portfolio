import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kheti from "../../Assets/Projects/Kheti.png";
import budget_buddy from "../../Assets/Projects/Budget_buddy.png";
import epilepy_shield from "../../Assets/Projects/Epilepsy_shield.jpeg";


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
              imgPath={kheti}
              isBlog={false}
              title="Smart Farming assistant - Kheti"
              description="Kheti is a web application that uses data science to help farmers identify and treat plant diseases. The application is built on Next.js and Flask, and it uses a variety of data science algorithms, including image classification, natural language processing, and machine learning."
              ghLink="https://github.com/Thorfinnn/Smart-Farming-assisstant"
            // demoLink="https://website.link/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budget_buddy}
              isBlog={false}
              title="Budget Buddy"
              description="The application include features such as Budget tracking , Expense monitoring , Financial planning tools To promote sustainable behavior, the application should make use of an ML model which gives recommendations based on the spending pattern of the user"
              ghLink="https://github.com/chinmay29hub/Hackerstellar-BootstrapParadox"
            // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={epilepy_shield}
              isBlog={false}
              title="Epilepsy Shield"
              description="A chrome extension that detects flashing lights from YouTube videos and skips those segments to help people suffering from Photosensitive Epilepsy enjoy the videos."
              ghLink="https://github.com/Rishabh-Tripathi1/EpilepsyShield"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
