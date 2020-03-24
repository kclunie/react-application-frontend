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
         <img className="Image" src="https://imgur.com/yEHvm4I.png" alt="niagara"></img>
   
         <Container></Container>
         <p></p>
         <Container>
            <Row>
                <Col xs={3} md={3}>
                {/* <Image src="holder.js/171x180" rounded /> */}
                {/* <img className="Image" src="https://imgur.com/hKqv9uL.png" alt="lake"></img> */}
                <Image className="Image" src="https://imgur.com/yEHvm4I.png" alt="lake" rounded/>
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
                    width={371}
                    height={280}
                    alt="171x180"
                    src="https://imgur.com/gYJf2Ae.png"
                    // <blockquote class="imgur-embed-pub" lang="en" data-id="gYJf2Ae"><a href="//imgur.com/gYJf2Ae">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
                />
                <Figure.Caption>
                    Live with no excuses and travel with no regrets.
                </Figure.Caption>
    </Figure>
     </div>   
    )
}



export default Home