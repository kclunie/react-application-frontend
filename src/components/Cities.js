import React from 'react'
import {connect} from 'react-redux'
import {deleteCity} from '../actions/deleteCity'
import Button from 'react-bootstrap/Button';

const Cities = (props) => {
    console.log("yo")
    console.log(props.cities)

    const handleDelete = (city) => {
        //debugger;
        props.deleteCity(city.id, city.trip_id)
    }

    return(
        <div>
            Cities
            <br></br>
            <br></br>
            {props.cities && props.cities.map(city =>
            <li key={city.id}> {city.location} - Hotel: {city.hotel} - {city.restaurants} - {city.activities} -  
            <Button variant="dark" onClick={() => handleDelete(city)}>Delete</Button><br></br><br></br></li>
            )}
        </div>
    )
}

export default connect(null, {deleteCity})(Cities)