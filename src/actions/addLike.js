export const addLike = (like, tripId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/trips/${tripId}/likes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(like)
        })
        .then(response => response.json())
        .then(trip => dispatch({type: 'ADD_LIKE', payload: trip}))
    }
}

