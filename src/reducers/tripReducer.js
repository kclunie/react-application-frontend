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
                //console.log("reducer 2 ADD_TRIP trip is", action.payload)
                return {...state, trips: [...state.trips, action.trip]}
                //return state.trips.concat(action.trip)
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