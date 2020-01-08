import React from 'react'
import {Link} from 'react-router-dom'

//const Trips = (props) => {
class Trips extends React.Component{

    state = {
        name: ""
    }

   updateSearch = (event) => { 
        console.log("in trips component - updateSearch")
        this.setState({name: event.target.value})
   }

    render(){
    const filteredTrips = this.props.trips.filter(trip => trip.name.includes(this.state.name))
    return(
        <div>
            <br></br>
            <h2>My Trips</h2>
            <input type="text" name="name" value={this.state.name} onChange={(event) => this.updateSearch(event)}  placeholder="Search"></input>
            <br></br>
            {filteredTrips.map(trip => 
            <li key={trip.id}>
                <Link to={`/trips/${trip.id}`}>{trip.name}</Link>
            </li>)}
           

        </div>
    )
}
}


export default Trips