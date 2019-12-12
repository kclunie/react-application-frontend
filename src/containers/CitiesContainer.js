import React from 'react'
import CityInput from '../components/CityInput'
import Cities from '../components/Cities'

class CitiesContainer extends React.Component{

    render(){
        return(
            <div>
                <CityInput trip={this.props.trip}/>
                <Cities cities={this.props.trip && this.props.trip.cities}/>
            </div>
        )
    }
}

export default CitiesContainer