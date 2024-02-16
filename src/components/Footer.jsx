import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaInstagram, FaGoogle } from 'react-icons/fa';
import appatakars from '../assets/appatakkars.png';
import beingkecinan from '../assets/bkec.png';
import MapofMTS from '../assets/map.jpg';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={4} xs={12}>
            <div className="contact-section">
              <h1 className="head">Contact Us</h1>
              <div className="coordinators">
                <h5>Staff Co-ordinators</h5>
                <ul>
                  <li className="font">Dr. Thangarasu.S.K - 9942783338</li>
                  <li className="font">Mr. ArunKumar.P.M - 9750135213</li>
                </ul>
              </div>
              <div className="coordinators">
                <h5>Student Co-ordinators</h5>
                <ul>
                  <li className="font">Mr. Selva Vignesh.K - 6380082151</li>
                  <li className="font">Mr. Vigneswara - 9786521314</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="social-media">
              <h1 className="head">Social Media</h1>
              <ul>
                <li className="font">
                  <FaGoogle size={20} /> competitions.rbc.kec
                </li>
                <li className="font">
                  <FaInstagram size={20} /> robotics.club_kec
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="social-teams">
              <h1 className="head">Social Media Teams</h1>
              <ul>
                <li>
                  <Image src={appatakars} alt="appatakars" className="img"/>
                </li>
                <li>
                  <Image src={beingkecinan} alt="beingkecinan" className="img"/>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="divider" />
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="developer">
                <p >Developed By</p>
                <Link to="/dev" className="developer-link">
                  <a href="https://www.linkedin.com/in/%20sanjaykumar-rengaraju">SanjayKumarR</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
