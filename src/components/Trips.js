import React from 'react'
import {Link} from 'react-router-dom'

const Trips = (props) => {

    return(
        <div>
            <br></br>
            <h2>My Trips</h2>
            <br></br>
            {props.trips.map(trip => 
            <li key={trip.id}>
                <Link to={`/trips/${trip.id}`}>{trip.name}</Link>
            </li>)}

        </div>
    )
}

export default Trips