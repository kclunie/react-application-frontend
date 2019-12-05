import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () =>{
    return(
     <div className="NavBar">
         WhereInTheWorld  |  
         <NavLink to="/trips">My Trips  |  </NavLink>
         <NavLink to="/trips/new"> New Trip  |  </NavLink>
     </div>   
    )
}



export default NavBar