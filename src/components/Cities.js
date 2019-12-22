import React from 'react'
import {connect} from 'react-redux'
import {deleteCity} from '../actions/deleteCity'
import Button from 'react-bootstrap/Button';

const Cities = (props) => {
    console.log("yo")
    console.log(props.cities)

    const handleDelete = (city) => {
        console.log('a')
        props.deleteCity(city.id, city.trip_id)
        console.log('b')
    }

    return(
        <div>
            <br></br><br></br>
            <h3 className="CitiesExplored">Cities Explored</h3>
            <br></br>
            {props.cities && props.cities.map(city =>
            <li key={city.id}> <strong>{city.location}</strong> <br></br> Hotel: {city.hotel} <br></br> Restaurants: {city.restaurants} <br></br> Activities: {city.activities} <br></br>  
            <Button variant="dark" onClick={() => handleDelete(city)}>Delete</Button><br></br><br></br></li>
            )}
        </div>
    )
}

export default connect(null, {deleteCity})(Cities)