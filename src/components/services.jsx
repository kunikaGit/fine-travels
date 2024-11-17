import React from "react";
import Navbar from "./header";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./footer";
import Whatsapp from "./whatsapp";

const Services = () => {
    return (
        <>
            <Navbar />
            <section>
                <Whatsapp />
                <div>
                    <h1 className="page-heading py-md-5">Services</h1>
                    <Container>
                        <Row>
                            <Col md={6} className="order-2 order-md-1">
                                <div className=" ps-md-4">
                                    <div className="d-flex service-img50">
                                        <img src="images/car1.jpeg" alt="vehical" className="half-section-image" />
                                        <img src="images/car2.jpeg" alt="vehical" className="half-section-image" />
                                    </div>
                                    <div className="d-flex service-img50">
                                        <img src="images/car3.jpeg" alt="vehical" className="half-section-image" />
                                        <img src="images/car9.jpeg" alt="vehical" className="half-section-image" />
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} className="order-1 order-md-2">
                                <div className="service-content ps-md-5 mt-md-4">
                                    <h2 className="sub-heading">Self-Drive Car Rentals</h2>
                                    <p>
                                        "At Fine Travels, we provide top-notch self-drive car rentals, ensuring you have the freedom to explore your destination at your own pace. Our fleet features a variety of well-maintained, legal, and secure vehicles that cater to every need, whether it’s a compact car for city trips or an SUV for a family adventure.
                                        With Fine Travels, you’ll enjoy competitive prices, excellent customer service, and the peace of mind that comes with knowing all our vehicles meet the highest safety standards. Experience the joy of driving with comfort and convenience – because your journey matters to us."
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col md={6}>
                                <div className="service-content pe-md-5 mt-md-4">
                                    <h2 className="sub-heading">Tour Packages</h2>
                                    <p>
                                        "Discover the best travel experiences with Fine Travels' thoughtfully curated tour packages, designed to provide comfort, convenience, and affordability. We offer a variety of vehicles, from compact cars to spacious tempos, ensuring the perfect fit for groups of all sizes. Whether you're planning a family getaway, a spiritual journey, or an adventure with friends, we have you covered.
                                        Our packages include popular destinations like Indore to Ujjain, Maheshwar, Mandu, Omkareshwar, and many more. Enjoy the best prices, reliable transportation, and seamless travel arrangements, making every journey memorable and stress-free. Let Fine Travels take you on an unforgettable trip to the most beautiful and iconic locations."</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className=" ps-md-4">
                                    <div className="d-flex service-img50">
                                        <img src="images/maheshwar.jpg" alt="vehical" className="half-section-image" />
                                        <img src="images/mandu.jpg" alt="vehical" className="half-section-image" />
                                    </div>
                                    <div className="d-flex service-img50">
                                        <img src="images/ujjain.png" alt="vehical" className="half-section-image" />
                                        <img src="images/om.png" alt="vehical" className="half-section-image" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col md={6} className="order-2 order-md-1">
                                <div className=" ps-md-4">
                                    <div className="d-flex service-img50">
                                        <img src="images/car4.jpeg" alt="vehical" className="half-section-image" />
                                        <img src="images/car7.jpeg" alt="vehical" className="half-section-image" />
                                    </div>
                                    <div className="d-flex service-img50">
                                        <img src="images/car8.jpeg" alt="vehical" className="half-section-image" />
                                        <img src="images/car5.jpeg" alt="vehical" className="half-section-image" />
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} className="order-1 order-md-2">
                                <div className="service-content ps-md-5 mt-md-4">
                                    <h2 className="sub-heading">Chauffeur-Driven Rentals</h2>
                                    <p>
                                        "Experience stress-free travel with Fine Travels' Chauffeur-Driven Rentals, where comfort meets reliability. Our professional drivers are skilled, courteous, and committed to ensuring your safety and satisfaction throughout the journey.
                                        Whether it's a business trip, a family outing, or a leisurely ride, our chauffeur-driven vehicles provide the ultimate convenience, allowing you to sit back, relax, and enjoy the journey. With Fine Travels, you can trust in the expertise of our drivers and the comfort of our well-maintained vehicles for a seamless and pleasant travel experience."
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Services;