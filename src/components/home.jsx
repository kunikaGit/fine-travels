import React, { useRef } from "react";
import Navbar from "./header";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const Home = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    return (
        <>
            <Navbar />
            <section>
                <div className="home-page">
                    <Container>
                        <Row >
                            <Col lg={6} className="d-flex align-items-center">
                                <div className="hero-section" data-overlay-dark="5">
                                    <h1>
                                        <span>Looking</span> to save more on
                                        your rental car?
                                    </h1>
                                    <p>
                                        Whether you’re planning a weekend getaway, a business trip, or just need a reliable ride for the day, we offers a wide range of vehicles to suit your needs.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="right-section">
                                    <div className="hero-img d-flex gap-4 align-items-center justify-content-center">
                                        <div>
                                            <div className="car-img">
                                                <img src="images/car1.jpg" />
                                            </div>
                                            <div className="car-img">
                                                <img src="images/car3.jpg" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="car-img">
                                                <img src="images/car2.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </section>
            <section>
                <Container>
                    <h2 className="section-heading mb-4 after-line">Explore Our Fleet</h2>
                    <Row>
                        <div className="slider-container home-slider">
                            <Slider
                                ref={slider => {
                                    sliderRef = slider;
                                }}
                                {...settings}
                            >

                                <div className="me-1">
                                    <div className="service-card">
                                        <div className="card-img">
                                            <img src="images/vehicle1.png" alt="car" />
                                        </div>
                                        <h3 className="car-type">SUV</h3>
                                        <h4>Harrier Wagon</h4>
                                        <div className="seats">
                                            <span>Passangers/Seats</span>
                                            <span>2</span>
                                        </div>
                                        <div className="seats">
                                            <span>Doors</span>
                                            <span>2</span>
                                        </div>
                                        <div>
                                            <h3 className="price-tag">₹ 200<span>/Per Day</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="me-1">
                                    <div className="service-card">
                                        <div className="card-img">
                                            <img src="images/vehicle2.png" alt="car" />
                                        </div>
                                        <h3 className="car-type">SUV</h3>
                                        <h4>Harrier Wagon</h4>
                                        <div className="seats">
                                            <span>Doors</span>
                                            <span>2</span>
                                        </div>
                                        <div className="seats">
                                            <span>Passangers/Seats</span>
                                            <span>2</span>
                                        </div>
                                        <div>
                                            <h3 className="price-tag">₹ 200<span>/Per Day</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="me-1">
                                    <div className="service-card">
                                        <div className="card-img">
                                            <img src="images/vehicle3.png" alt="car" />
                                        </div>
                                        <h3 className="car-type">SUV</h3>
                                        <h4>Harrier Wagon</h4>
                                        <div className="seats">
                                            <span>Doors</span>
                                            <span>2</span>
                                        </div>
                                        <div className="seats">
                                            <span>Passangers/Seats</span>
                                            <span>2</span>
                                        </div>
                                        <div>
                                            <h3 className="price-tag">₹ 200<span>/Per Day</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="me-1">
                                    <div className="service-card">
                                        <div className="card-img">
                                            <img src="images/vehicle4.png" alt="car" />
                                        </div>
                                        <h3 className="car-type">SUV</h3>
                                        <h4>Harrier Wagon</h4>
                                        <div className="seats">
                                            <span>Doors</span>
                                            <span>2</span>
                                        </div>
                                        <div className="seats">
                                            <span>Passangers/Seats</span>
                                            <span>2</span>
                                        </div>
                                        <div>
                                            <h3 className="price-tag">₹ 200<span>/Per Day</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="me-1">
                                    <div className="service-card">
                                        <div className="card-img">
                                            <img src="images/tempo.png" alt="car" />
                                        </div>
                                        <h3 className="car-type">SUV</h3>
                                        <h4>Harrier Wagon</h4>
                                        <div className="seats">
                                            <span>Doors</span>
                                            <span>2</span>
                                        </div>
                                        <div className="seats">
                                            <span>Passangers/Seats</span>
                                            <span>2</span>
                                        </div>
                                        <div>
                                            <h3 className="price-tag">₹ 200<span>/Per Day</span></h3>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </Row>
                    <div>
                        <div className="home-slider">
                            <div className="d-flex align-items-center justify-content-center slider-arrows">
                                <button onClick={previous} className="arrow-btn"><img src="images/arrow-left.svg" className="left-arrow"/></button>
                                <button onClick={next} className="arrow-btn"><img src="images/arrow-right.svg" className="right-arrow"/></button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section>
                <Container>
                    <h2 className="section-heading mb-4 after-line">About Us</h2>
                    <Row>
                        <Col md={6}>
                            <div className="about-content">
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over ₹ 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                </p>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Home;