import React from 'react'
import {connect} from 'react-redux'
import {deleteCity} from '../actions/deleteCity'

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
            {props.cities && props.cities.map(city =>
            <li key={city.id}> {city.location} - Hotel: {city.hotel} - {city.restaurants} - {city.activities} 
            <button onClick={() => handleDelete(city)}>Delete</button></li>
            )}
        </div>
    )
}

export default connect(null, {deleteCity})(Cities)