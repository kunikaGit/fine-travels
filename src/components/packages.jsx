import React from "react";
import Navbar from "./header";
import { Container,Row,Col } from "react-bootstrap";
import Footer from "./footer";
import Whatsapp from "./whatsapp";


const packages = [
    {
        img:"images/ujjain.png",
        location:"Indore to Ujjain",
        price:"Price - 15000/-"
    },
    {
        img:"images/om.png",
        location:"Indore to Omkareshwar",
        price:"Price - 15000/-"
    },
    {
        img:"images/maheshwar.jpg",
        location:"Indore to Maheshwar",
        price:"Price - 15000/-"
    },
    {
        img:"images/mandu.jpg",
        location:"Indore to Mandu",
        price:"Price - 15000/-"
    },
    {
        img:"images/om.png",
        location:"Indore to Omkareshwar",
        price:"Price - 15000/-"
    },
    {
        img:"images/ujjain.png",
        location:"Indore to Ujjain",
        price:"Price - 15000/-"
    },
]
const Packages = () =>{
    return(
        <>
          <Navbar/>
          <section>
            <Whatsapp/>
            <div>
                <h1 className="page-heading py-md-5">Packages</h1>
                <Container>
                <Row>
                    {packages.map((packes,index)=>(
                        <Col md={3} key={index} className="mb-3">
                            <div className="package-info">
                                <div className="package-img">
                                    <img src={packes.img} alt={packes.img} />
                                </div>
                                <div className="px-2 py-3" >
                                    <h3>{packes.location} </h3>
                                    <span>{packes.price}</span>
                                </div>
                            </div>
                        </Col>
                    ))}
                    </Row>
                </Container>
            </div>
        </section>  
        <Footer/>
        </>
    )
}
export default Packages;