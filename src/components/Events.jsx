import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import robointro from "../assets/robointro.gif";
import '../styles/Events.css'

const Events = () => {
  return (
    <div >
      <Container>
        <Row>
          <Col md={6} className="my-auto">
            <Image src={robointro} alt="/" className="w-100 my-5 mob-img" />
          </Col>
          <Col md={6} className=" my-auto">
            <p className="font-bold text-pp">Proudly presented by</p>
            <h1 className="text-rc">Robotics club of KEC</h1>
            <br />
            <q className="text-rf">FOR THE STUDENTS BY THE STUDENTS.</q>
            <br />
            <p className="text-rn">
              National level event with exciting cash prizes.
              Don't wait, register as soon as possible. ⚠️
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Events;
