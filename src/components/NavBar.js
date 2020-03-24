import React from 'react'
import {NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () =>{
    return(
     <div className="NavBar">
         <Container>
         <Navbar expand="lg" bg="dark" variant="dark">
         WhereInTheWorld  
         <Nav.Link className="NavBar2" href="/">Home</Nav.Link>
         <Nav.Link className="NavBar2" href="/trips">My Trips</Nav.Link>
         <Nav.Link className="NavBar2" href="/trips/new">New Trip</Nav.Link>
         {/* <NavLink className="NavBar2" to="/">Home</NavLink>
         <NavLink className="NavBar2" to="/trips">My Trips</NavLink>
         <NavLink className="NavBar2" to="/trips/new"> New Trip  |  </NavLink> */}
         </Navbar>
         </Container>
     </div>   
    )
}



export default NavBar