import React from 'react'
import CityInput from '../components/CityInput'
import Cities from '../components/Cities'
import Likes from '../components/Likes'
import City from '../components/City'

class CitiesContainer extends React.Component{

    render(){
        return(
            <div>
                <Cities cities={this.props.trip && this.props.trip.cities} trip={this.props.trip}/>
                <CityInput trip={this.props.trip}/>
                
            </div>
        )
    }
}

export default CitiesContainer