import React from 'react'
import {NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () =>{
    return(
     <div className="NavBar">
         <Container>
         <Navbar expand="lg" bg="dark" variant="dark">
         WhereInTheWorld  |  
         <NavLink to="/" variant="light">Home  |  </NavLink>
         <NavLink to="/trips">My Trips  |  </NavLink>
         <NavLink to="/trips/new"> New Trip  |  </NavLink>
         </Navbar>
         </Container>
     </div>   
    )
}



export default NavBar