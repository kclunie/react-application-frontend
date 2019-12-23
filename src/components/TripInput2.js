import React from 'react'
import { updateNewTripForm } from '../actions/addTrip2'
import { addTrip } from '../actions/addTrip2'
import {connect} from 'react-redux'


const TripInput2 = ({formData, updateNewTripForm, addTrip, history}) => {

    const { name, date } = formData

    const handleChange = event => {
        const { name, value } = event.target
        updateNewTripForm(name, value)
    }

    const handleSubmit = event => {
        console.log(formData)
        console.log(event)
        event.preventDefault()
        addTrip(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            placeholder="name"
            name="name"
            onChange={handleChange}
            value={name}
            />
             <input
             placeholder="date"
            name="date"
            onChange={handleChange}
            value={date}
            />
            <input
            type="submit"
            value="Create Trip"
            />
        </form>
    )
};

const mapStateToProps = state => {
    return {
     formData: state.tripReducer
    }
}

export default connect(mapStateToProps, { updateNewTripForm, addTrip })(TripInput2)