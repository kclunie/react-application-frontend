import React from 'react'
import { updateNewTripForm } from '../actions/addTrip2'
import {connect} from 'react-redux'


const TripInput2 = ({name, date, updateNewTripForm, history}) => {

    const handleChange = event =>{
        const { name, value } = event.target
        updateNewTripForm(name, value)
    }

    const handleSubmit = event => event.preventDefault()

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
    const { name, date } = state.tripInput2
    return {
        name,
        date
    }
}

export default connect(mapStateToProps, { updateNewTripForm })(TripInput2)