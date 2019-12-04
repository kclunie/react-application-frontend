export const deleteCity = (cityId, tripId) => {

    return (dispatch) => {
       return fetch(`http://localhost:3000/api/v1/trips/${tripId}/cities/${cityId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(trip => dispatch({type: 'DELETE_CITY', payload: trip}))
    }
}