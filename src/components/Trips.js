import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

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
        console.log("this.props.trips is", this.props.trips)
        //debugger
    const filteredTrips = this.props.trips.filter(trip => trip.name.includes(this.state.name))
    return(
        <div className="Background">

            <br></br>
            <h1 className="Title">Vacation Destinations</h1>
            <input type="text" name="name" value={this.state.name} onChange={(event) => this.updateSearch(event)}  placeholder="Search"></input>
            <br></br><br></br>
            {filteredTrips.map(trip => 
            <li><Button variant="dark" key={trip.id}>
                <Link className="TripList" to={`/trips/${trip.id}`}>{trip.name}<br></br></Link>
            </Button><br></br><br></br></li>)}

        </div>
    )
}
}


export default Trips