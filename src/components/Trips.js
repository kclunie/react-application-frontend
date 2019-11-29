import React from 'react'

const Trips = (props) => {

    return(
        <div>
            Trips
            {props.trips.map(trip => <li key={trip.id}>{trip.name} - {trip.date} </li>)}
        </div>
    )
}

export default Trips