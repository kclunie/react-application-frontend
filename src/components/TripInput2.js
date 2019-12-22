import React from 'react'

const TripInput2 = () => {

    const handleChange = event =>{
        const { name, value } = event.target
        updateNewTripForm(name, value)
    }

    return (
        <form>
            <input
            name="name"
            onChange={handleChange}
            value={"name"}
            />
             <input
            name="date"
            onChange={handleChange}
            value={"date"}
            />
        </form>
    )
};

export default TripInput2