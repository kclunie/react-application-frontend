import React from 'react'
import Button from 'react-bootstrap/Button';

const City = (props) => {

    return (
        <li>
    
           <strong>{props.city.location}</strong> 
            <br></br> Hotel: {props.city.hotel}
            <br></br> Restaurants: {props.city.restaurants} 
            <br></br> Activities: {props.city.activities} 
            <br></br>  
            <Button variant="dark" onClick={() => props.handleDelete(props.city)}>Delete</Button><br></br><br></br>
            <Button className="like" variant="dark" onClick={() => props.handleClick(props.city)}>Like</Button><br></br><br></br>
    
        </li>
    )
}

export default City