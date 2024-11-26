import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import config from "../config/config";
const Footer = () => {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="d-flex align-items-center footer-step1">
                                <div className="footer-icon">
                                    <img src="images/phone.svg" alt="phone" />
                                </div>
                                <div>
                                    <h3>Call Us</h3>
                                    <span>+91-9301612334</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="d-flex align-items-center footer-step1">
                                <div className="footer-icon">
                                    <img src="images/email.svg" alt="email" />
                                </div>
                                <div>
                                    <h3>Email</h3>
                                    <span>sheikhnoushad1@gmail.com</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="d-flex  align-items-center footer-step1">
                                <div className="footer-icon">
                                    <img src="images/location.svg" alt="location" />
                                </div>
                                <div>
                                    <h3>Location</h3>
                                    <span>Chhoti Gwaltoli Patel Statue, Sattion Road Indore (M.P)</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={4}>
                            <div>
                                <img src="images/logo.jpg" style={{ height: "80px", width: "80px" }} alt="logo" />
                                <p className="mt-3 text-white">
                                    Experience the ease and convenience of renting a car with Novaride.
                                </p>
                            </div>
                            <div className="social-icon">
                                <div className="icon-img">
                                    <a
                                        href="https://wa.me/919301612334?text=Hello%2C%20I%20am%20interested%20in%20your%20travel%20packages.%20Could%20you%20share%20details%20about%20the%20available%20options%3F"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <img src="images/whatsapp.png" alt="whatsapp" />
                                    </a></div>
                                <div className="icon-img"><img src="images/facebook.png" alt="facebook" /></div>
                                <div className="icon-img">
                                    <Link to="https://www.instagram.com/taxi_fine.travels1/profilecard/?igsh=MXNhbTRvMGdtN2h0YQ%3D%3D"  target="_blank">
                                        <img src="images/instagram.png" alt="instagram" />
                                        </Link></div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="d-flex justify-content-md-center m-md-0 my-4">
                                <div className="footer-step2 ">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li><Link to={`${config.baseUrl}aboutus`}>About</Link></li>
                                        <li><Link to={`${config.baseUrl}services`}>Service</Link></li>
                                        <li><Link to={`${config.baseUrl}packages`}>Packages</Link></li>
                                        <li><Link to={`${config.baseUrl}contactus`}>Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="footer-step2">
                                <h3>Subscribe</h3>
                                <p>Want to be notified about our services. Just sign up and we'll send you a notification by email</p>
                                <div className="subscribe-mail">
                                    <input placeholder="Email Address" />
                                    <button type="button">
                                        <img src="images/arrow.png" alt="arrow" />
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
export default Footer;