export const addLike = (city, tripId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/trips/${tripId}/cities`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(city)
        })
        .then(response => response.json())
        .then(trip => dispatch({type: 'ADD_LIKE', payload: trip}))
    }
}