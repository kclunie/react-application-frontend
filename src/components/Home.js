import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Home = () =>{
    return(
     <div className="Home">
         <br></br><br></br>
         <h1 className="Title">WhereInTheWorld</h1><br></br>
         <p className="HomeQuote">I've traveled far and near and want to keep my memories clear. <br></br>To remember exactly where I was and share my favorite things with the ones I love.</p>
        <br></br>
         <img className="Image" src="https://imgur.com/hKqv9uL.png" alt="lake"></img>
         <Container>
            <Row>
                <Col xs={6} md={4}>
                <Image src="holder.js/171x180" rounded />
                </Col>
                <Col xs={6} md={4}>
                <Image src="holder.js/171x180" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                <Image src="holder.js/171x180" thumbnail />
                </Col>
            </Row>
        </Container>
     </div>   
    )
}



export default Home