import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';

const Home = () =>{
    return(
     <div className="Home">
         <br></br><br></br><br></br><br></br>
         <h1 className="Title">WhereInTheWorld</h1><br></br>
         <p className="HomeQuote">I've traveled far and near and want to keep my memories clear. <br></br>To remember exactly where I was and share my favorite things with the ones I love.</p>
        <br></br>
        <Container fluid>
            <img className="Image" src="https://imgur.com/hKqv9uL.png" alt="lake"></img>
            <p></p>
        </Container>
         <p></p>
         <Container fluid>
            <Row className="ImageRow">
                <Col>
                    <Image className="ImageColumn" src="https://imgur.com/JxKSy0O.png" alt="lake" rounded/>  
                </Col>
                <Col>
                    <Image className="ImageColumn" src="https://imgur.com/yEHvm4I.png" rounded/>
                </Col>
                <Col>
                    <Image className="ImageColumn" src="https://imgur.com/amYE4fm.png" rounded/>
                </Col>
            </Row>
        </Container>
        <p></p>
    
            <Figure>
                <Figure.Image
                    width={371}
                    height={280}
                    alt="171x180"
                    src="https://imgur.com/gYJf2Ae.png"
                />
                <Figure.Caption>
                    Live with no excuses and travel with no regrets.
                </Figure.Caption>
    </Figure>
     </div>   
    )
}



export default Home