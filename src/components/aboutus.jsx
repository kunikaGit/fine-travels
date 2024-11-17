import React from "react";
import Navbar from "./header";
import { Container,Row,Col } from "react-bootstrap";
import Footer from "./footer";
import Whatsapp from "./whatsapp";

const About = () =>{
    return(
        <>
          <Navbar/>
          <section>
          <Whatsapp/>
            <div>
                <h1 className="page-heading py-md-5">About Us</h1>
                <Container>
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
                        <Col md={6}>
                            <div className="h-section-img ps-md-4">
                                <img src="images/trav1.jpeg" alt="vehical" className="half-section-image"/>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                    <Col md={6}  className="order-2 order-md-1">
                            <div className="h-section-img pe-md-4">
                                <img src="images/car4.jpeg" alt="vehical" className="half-section-image"/>
                            </div>
                        </Col>
                        <Col md={6} className="order-1 order-md-2">
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
            </div>
        </section>  
        <Footer/>
        </>
    )
}
export default About;