import React from 'react'
import {Route} from 'react-router-dom'
import Trip from './Trip'

const Trips = (props) => {

    return(
        <div>
            Trips

            {props.trips.map(trip => <div key={trip.id}><Trip trip={trip}/></div>)}

        </div>
    )
}

export default Trips