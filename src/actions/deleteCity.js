export const deleteCity = (cityId, tripId) => {
    console.log("c")
    return (dispatch) => {
       return fetch(`http://localhost:3000/api/v1/trips/${tripId}/cities/${cityId}`, {
            method: 'DELETE'
        })
        .then(response => {
            console.log("d")
            response.json()})
        .then(trip => dispatch({type: 'DELETE_CITY', payload: trip}))
    }
    console.log("e")
}