import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import '../styles/Objective.css'; // Update the path to your CSS file
import Shoot from '../assets/Shoot.gif';
import robotrun from '../assets/robotrununscreen.gif';
import ultrarobo from '../assets/ultrarobo.gif';
import butterfly from '../assets/butterfly.webp';
import man from '../assets/man.webp';

function Objective() {
  return (
    <Container>
        <Fade bottom duration={2000}>
        <Row>

            <Col md={6} className=" my-auto">
            <h1 className="text-rc">Objectives</h1>
            <br />
            <p className="text-rn">
            “To transform our culture by creating a world where science and technology are celebrated and where young people dream of becoming science and technology leaders”
            </p>
            </Col>

            <Col md={6} className="my-auto">
                <Image src={ultrarobo} alt="ultrarobo" className="w-100 my-5 mob-img" />
            </Col>
          
        </Row>
        </Fade>
        <Fade bottom duration={2000}>
        <Row>
        
        <Col md={6} className="my-auto">
            <Image src={man} alt="Shoot" className="w-100 my-5 mob-img " />
        </Col>

        <Col md={6} className=" my-auto">
            <h1 className="text-rc">MISSION</h1>
            <br />
            <p className="text-rn">
                Our mission is to inspire young people to be science and technology leaders, by engaging them in exciting mentor-based programs that build science, engineering and technology skills, that inspire innovation, and that foster well-rounded life capabilities including self-confidence, communication, and leadership."
            </p>
        </Col>
        
          
        </Row>
        </Fade>
        <Fade bottom duration={2000}>
        <Row>
        
          <Col md={6} className=" my-auto">
            <h1 className="text-rc">VISION</h1>
            <br />
            <p className="text-rn">
            To become the greatest Robotics team in the South Zone and an annual competitor at the international level Robotics Competitions. Exemplifying the importance of service through continual expansion in focus and scale of community service projects within India. Acknowledging and addressing contemporary environmental issues through the adoption and innovation of new forms of clean building measures.
            </p>
          </Col>

          <Col md={6} className="my-auto">
            <Image src={robotrun} alt="ultrarobo" className="w-100 my-5 mob-img" />
          </Col>
        </Row>
        </Fade>
      </Container>
  );
}

export default Objective;