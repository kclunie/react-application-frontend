import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchTrips} from '../actions/fetchTrips'
import Trip from '../components/Trip'
import Trips from '../components/Trips'
import TripInput from '../components/TripInput'
import NavBar from '../components/NavBar'

class TripsContainer extends React.Component{

    componentDidMount(){
        this.props.fetchTrips()
    }

    render(){
        return(
            <div>
                TripsContainer
               <NavBar/>
                <Switch>
                <Route path='/trips/new' component={TripInput}/>
                <Route path='/trips/:id' render={(routerProps) => <Trip {...routerProps} trips={this.props.trips}/>}/>
                <Route exact path='/trips' render={(routerProps) => <Trips {...routerProps} trips={this.props.trips}/>}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        trips: state.trips
    }
}

export default connect(mapStateToProps, {fetchTrips})(TripsContainer)