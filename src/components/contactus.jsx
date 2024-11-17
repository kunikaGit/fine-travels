import React from "react";
import Navbar from "./header";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./footer";
import Whatsapp from "./whatsapp";

const Contactus = () => {
    return (
        <>
            <Navbar />
            <section>
                <Whatsapp />
                <div>
                    <h1 className="page-heading py-md-5">Contact Us</h1>
                    <Container>
                        <div style={{ height: '400px', width: '100%' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d77759.75522112659!2d75.84713452933674!3d22.768093799329627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d22.7387387!2d75.8799691!4m5!1s0x3962fd884e1bab17%3A0x3a53fdeb7c8b8814!2sFine%20Travels%2C%20Near%20Sarwate%20Bus%20Stand%2C%20Chhoti%20Gwaltoli%2C%20Indore%2C%20Madhya%20Pradesh%20452001!3m2!1d22.7132136!2d75.8687143!5e0!3m2!1sen!2sin!4v1731848628713!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                            </div>
                    </Container>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Contactus;