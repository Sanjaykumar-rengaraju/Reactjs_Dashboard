import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Typed from 'react-typed';
import Spinner from '../components/Spinner';
import '../styles/DashBoard.css'

const Dashboard = () => {
    return (
        <div>
            <Container className="py-5">
                <Row className="justify-content-center align-items-center">
                    <Col md={4} className="text-center mb-3 mb-md-0 align">
                        <Spinner />
                    </Col>
                    <Col md={6} className="text-center">
                        <h1 className="mt-3 font-weight-bold db-cn gap">Kongu Engineering College</h1>
                        <div className="mt-2 m3">
                            <h1 className="font-weight-bold  db-tit gap-h1">Expelliarmus 2K23!</h1>
                            <Typed
                                className="font-mono db-tt gap-tt"
                                strings={['8th Edition', 'Online-Registration opens', 'Cash Prize upto ₹30K']}
                                typeSpeed={90}
                                backSpeed={70}
                                loop
                            />
                        </div>
                        <p className="mt-3 font-weight-bold db-date gap-date">March 18, 2023</p>
                        <div className="mt-3">
                            <Link to="/events">
                                <Button className="db-btn">
                                    Register soon
                                </Button>
                            </Link>
                        </div>
                        <p className="mt-2 db-rd gap-rd">Last date to Register March 11, 2023.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Dashboard;
