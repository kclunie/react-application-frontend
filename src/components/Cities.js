import React from 'react'
import {connect} from 'react-redux'
import {deleteCity} from '../actions/deleteCity'
import Button from 'react-bootstrap/Button';
import City from './City'


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
            <City city={city} handleDelete={handleDelete}/>
            )}
           

        </div>
    )
}

export default connect(null, {deleteCity})(Cities)