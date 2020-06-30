import React from 'react'
import CitiesContainer from '../containers/CitiesContainer'
import TripEdit from './TripEdit'

const Trip = (props) => {
    console.log("trip component props are", props)

    let trip = props.trips.find(trip => trip.id == props.match.params.id)
    console.log("trip in trip.js is", trip)

    
    return (
        <div>
        <br></br><br></br><br></br>
        <h1 className="Title">
            {trip ? trip.name : null} - {trip ? trip.date : null}
        </h1>
        <TripEdit trip={trip}/>
        <CitiesContainer trip={trip}/>
        </div>
    )
}

export default Trip