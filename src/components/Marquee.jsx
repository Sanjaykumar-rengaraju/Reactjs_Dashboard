import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Marquee.css";

const Marquee = () => {
  return (
    <div className="fixed-bottom">
      <Container className="py-2 color-container">
        <Row>
          <Col className="overflow-hidden">
            <div className="text-lg font-mono text-black font-bold animate-marquee  mypause">
              <p className="center marq">
                Combo Offer : (Robo soccer/Robo Race) + manipulator workshop - ₹750 || Line follower + maze solver + manipulator workshop - ₹1050
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Marquee;
