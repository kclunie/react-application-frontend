import React from 'react'
import {connect} from 'react-redux'
import {addTrip} from '../actions/addTrip'

class TripInput extends React.Component{

    state = {
        name: '',
        date: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTrip(this.state)
    }

    render(){
        return (
            <div>
                TripInput
                <form onSubmit={this.handleSubmit}>
                    <label>Trip Name:</label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
                    <label>Date:</label>
                    <input type='text' placeholder='Date' value={this.state.date} name="date" onChange={this.handleChange}/><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addTrip})(TripInput)