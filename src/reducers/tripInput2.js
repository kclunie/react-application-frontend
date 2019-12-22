const initialState = {
    name: "",
    date: "",
}

export default (state=initialState, action) => {
    console.log("inreducer!", action)
    switch (action.type) {
        case "UPDATE_NEW_TRIP_FORM":
            const returnVal =  {
             ...state,
                [action.formData.name]: action.formData.value
            }
            console.log("returnval is", returnVal)
            return returnVal
        case "RESET_NEW_TRIP_FORM":
            return initialState
        default:
            return state
    }
}