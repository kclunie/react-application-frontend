export const updateNewTripForm = (name, value) => {
    console.log("name and value in updateNewTripForm is", name, value)
    const formData = { name, value }
    console.log("formData in updateNewTripForm is", formData)
    return {
        type: "UPDATE_NEW_TRIP_FORM",
        formData: { name, value }
    }
}

export const addTrip = trip =>{
    console.log("action", trip)
    return {
        type: "ADD_TRIP",
        trip
    }
}

