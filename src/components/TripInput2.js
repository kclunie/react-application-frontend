import React from 'react'
import { updateNewTripForm } from '../actions/addTrip2'
import { addTrip } from '../actions/addTrip2'
import {connect} from 'react-redux'


const TripInput2 = ({formData, updateNewTripForm, addTrip, history}) => {

    const { name, date } = formData
    console.log(name, date)
    console.log(formData)

    const handleChange = event => {
        console.log(event.target)
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
        <div>
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
        </div>
    )
};

const mapStateToProps = state => {
    console.log(state)
    return {
     formData: state.tripReducer
    }
}

export default connect(mapStateToProps, { updateNewTripForm, addTrip })(TripInput2)