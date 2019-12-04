import React from 'react'
import {connect} from 'react-redux'
import {addCity} from '../actions/addCity'

class CityInput extends React.Component{

    state = {
        location: '',
        hotel: '',
        restaurants: '',
        activities: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addCity(this.state, this.props.trip.id)
        this.setState({
            location: '',
            hotel: '',
            restaurants: '',
            activities: ''
        })
    }

    render(){
        return(
            <div>
                CityIinput
                <form onSubmit={this.handleSubmit}>
                    <label>Location:</label>
                    <input type='text' name='location' value={this.state.location} onChange={this.handleChange}></input>
                    <label>Hotel:</label>
                    <input type='text' name='hotel' value={this.state.hotel} onChange={this.handleChange}></input>
                    <label>Restaurants:</label>
                    <input type='text' name='restaurants' value={this.state.restaurants} onChange={this.handleChange}></input>
                    <label>Activities:</label>
                    <input type='text' name='activities' value={this.state.activities} onChange={this.handleChange}></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default connect(null, {addCity})(CityInput)