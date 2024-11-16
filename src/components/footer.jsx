import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                                    <img src="images/email.svg" alt="phone" />
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
                                    <img src="images/location.svg" alt="phone" />
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
                                <img src="images/logo.jpg" style={{ height: "80px", width: "80px" }} />
                                <p className="mt-3 text-white">
                                    Experience the ease and convenience of renting a car with Novaride.
                                </p>
                            </div>
                            <div className="social-icon">
                                <div className="icon-img"><img src="images/whatsapp.png" alt="whatsapp"/></div>
                                <div className="icon-img"><img src="images/facebook.png" alt="whatsapp"/></div>
                                <div className="icon-img"><img src="images/instagram.png" alt="whatsapp"/></div>
                            </div>
                        </Col>
                         <Col md={4}>
                         <div className="d-flex justify-content-md-center m-md-0 my-4">
                         <div className="footer-step2 ">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><Link to="">About</Link></li>
                                <li><Link to="">Cars</Link></li>
                                <li><Link to="">Contact</Link></li>
                                <li><Link to="">Service</Link></li>
                            </ul>
                         </div>
                         </div>
                         </Col>
                         <Col md={4}>
                         <div className="footer-step2">
                            <h3>Subscribe</h3>
                           <p>Want to be notified about our services. Just sign up and we'll send you a notification by email</p>
                           <div className="subscribe-mail">
                           <input placeholder="Email Address"/>
                           <button type="button">
                            <img src="images/arrow.png"/>
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