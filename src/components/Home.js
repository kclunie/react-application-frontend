import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';

const Home = () =>{
    return(
     <div className="Home">
         <br></br><br></br>
         <h1 className="Title">WhereInTheWorld</h1><br></br>
         <p className="HomeQuote">I've traveled far and near and want to keep my memories clear. <br></br>To remember exactly where I was and share my favorite things with the ones I love.</p>
        <br></br>
         <img className="Image" src="https://imgur.com/hKqv9uL.png" alt="lake"></img>
         <img className="Image" src="https://imgur.com/a/CYfpsS1.png" alt="lake"></img>
   
         <Container></Container>
         <p></p>
         <Container>
            <Row>
                <Col xs={1} md={6}>
                {/* <Image src="holder.js/171x180" rounded /> */}
                {/* <img className="Image" src="https://imgur.com/hKqv9uL.png" alt="lake"></img> */}
                <Image className="Image" src="https://imgur.com/hKqv9uL.png" alt="lake" rounded/>
                </Col>
                <Col xs={6} md={4}>
                <Image src="holder.js/171x180" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                <Image src="holder.js/171x180" thumbnail />
                </Col>
            </Row>
        </Container>

            <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="//imgur.com/a/CYfpsS1.png"
                    // https://imgur.com/a/8plOIyu
                    // <blockquote class="imgur-embed-pub" lang="en" data-id="a/8plOIyu"><a href="//imgur.com/a/8plOIyu"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
                    // <blockquote class="imgur-embed-pub" lang="en" data-id="a/CYfpsS1"><a href="//imgur.com/a/CYfpsS1"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
                />
                <Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
    </Figure>
     </div>   
    )
}



export default Home