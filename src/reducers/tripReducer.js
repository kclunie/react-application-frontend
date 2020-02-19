export default function tripReducer (state = {trips: []}, action) {
    switch (action.type){
        case 'FETCH_TRIPS':
            return {trips: action.payload}
        case "UPDATE_NEW_TRIP_FORM":
            const returnVal =  {
             ...state,
                [action.formData.name]: action.formData.value
            }
            console.log("returnval of UPDATE_TRIP is", returnVal)
            return returnVal
        case 'ADD_TRIP':
                console.log("reducer ADD_TRIP trip is", action)
                return {...state, trips: [...state.trips, action.payload]}
        case 'ADD_CITY':
            let trips = state.trips.map(trip => {
                if (trip.id === action.payload.id){
                    return action.payload
                }
                else {
                    return trip
                }
            })
            return {...state, trips: trips}
        case 'DELETE_CITY':
            let trips2 = state.trips.map(trip => {
                if (trip.id === action.payload.id){
                    return action.payload
                }
                else {
                    return trip
                }
            })
            return {...state, trips: trips2}
        default:
            return state
    }
}