import React from 'react'
import CitiesContainer from '../containers/CitiesContainer'

const Trip = (props) => {
    console.log(props)

    let trip = props.trips.find(trip => trip.id == props.match.params.id)
    console.log(trip)

    return (
        <div>
        <h2>
            {trip ? trip.name : null} - {trip ? trip.date : null}
        </h2>
        <CitiesContainer trip={trip}/>
        </div>
    )
}

export default Trip