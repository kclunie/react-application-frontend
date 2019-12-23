export const updateNewTripForm = (name, value) => {
    console.log(name, value)
    const formData = { name, value }
    console.log(formData)
    return {
        type: "UPDATE_NEW_TRIP_FORM",
        formData: { name, value }
    }
}

export const addTrip = trip =>{
    console.log("addtripdata is", trip)
    return {
        type: "ADD_TRIP",
        payload: trip
    }
}