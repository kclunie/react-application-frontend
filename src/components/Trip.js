import React from 'react'
import CitiesContainer from '../containers/CitiesContainer'
import TripEdit from './TripEdit'

const Trip = (props) => {
    console.log("trip component props are", props)

    let trip = props.trips.find(trip => trip.id == props.match.params.id)
    console.log("trip in trip.js is", trip)

    
    return (
        <div>
        <h2>
            {trip ? trip.name : null} - {trip ? trip.date : null}
        </h2>
        <CitiesContainer trip={trip}/>
        {/* <TripEdit trip={trip}/> */}
        </div>
    )
}

export default Trip