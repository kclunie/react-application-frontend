import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchTrips} from '../actions/fetchTrips'
import Trip from '../components/Trip'
import Trips from '../components/Trips'
import TripInput from '../components/TripInput'
import TripInput2 from '../components/TripInput2'
import NavBar from '../components/NavBar'
import Home from '../components/Home'

class TripsContainer extends React.Component{

    componentDidMount(){
        this.props.fetchTrips()
    }

    render(){
        return(
            <div>
               <NavBar/>
                <Switch>
                <Route exact path='/' component={Home}/>   
                {/*<Route path='/trips/new' component={TripInput}/>*/}
                <Route path='/trips/new' component={TripInput2}/>
                <Route path='/trips/:id' render={(routerProps) => <Trip {...routerProps} trips={this.props.trips}/>}/>
                <Route exact path='/trips' render={(routerProps) => <Trips {...routerProps} trips={this.props.trips}/>}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("mapStateToProps state is equal to", state)
    console.log("global state in mapstate to props ", state.tripReducer.trips)
    return{
        trips: state.tripReducer.trips
    }
}

export default connect(mapStateToProps, {fetchTrips})(TripsContainer)