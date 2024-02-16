import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Navbar, Row, Col } from 'react-bootstrap';
import keclogo from '../assets/keclogo.png';
import clublogo from '../assets/club_logo.png';
import '../styles/Navbar.css';

function NavBar() {
  return (
    <>
      <Navbar expand="md">
        <Container fluid>
          <Row className="align-items-center">
            <Col xs={12} md={3} className="color">
              <Navbar.Brand href="#home">
                <img
                  src={keclogo}
                  width="100"
                  height="100"
                  className="d-inline-block align-top"
                  alt="keclogo"
                />
                <span className="title-txt">Expellirimus2K23</span>
              </Navbar.Brand>
              
            </Col>
            {/*<Col xs={12} md={3} className="color-title text-center">
              Expellirimus2K23
  </Col>*/}
          </Row>
         
          <Navbar.Toggle className="custom-toggler" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mx-auto color">
                <Row><Col xs={12} md={3} className="color-nav">Home</Col></Row>
                <Row><Col xs={12} md={3} className="color-nav">Events</Col></Row>
                <Row><Col xs={12} md={3} className="color-nav">About</Col></Row>
                <Row><Col xs={12} md={3} className="color-nav">History</Col></Row>
            </Nav>
          </Navbar.Collapse>
          
          <Row>
                <Col xs={12} md={3} className="color">
                    <Navbar.Brand href="#home">
                        <img
                        src={clublogo}
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                        alt="clublogo"
                        />
                    </Navbar.Brand>
                </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
