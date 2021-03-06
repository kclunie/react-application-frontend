export const editTrip = (data) => {
// debugger;
    return (dispatch) => {
        // fetch(`http://localhost:3000/api/v1/trips/${data.id}`, {
        fetch(`https://trips-backend.herokuapp.com/api/v1/trips/${data.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        } )
        .then(response => response.json())
        .then(trip => dispatch({type: 'EDIT_TRIP', payload: trip}))
    }
}