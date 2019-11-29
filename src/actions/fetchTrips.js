export function fetchTrips(){
    return (dispatch) =>{
        fetch('http://localhost:3000/api/v1/trips', {
            method: 'GET'
          })
          .then(response => response.json())
          .then(data => dispatch({
              type: 'FETCH_TRIPS',
              payload: data 
          }))

    }
  
   // this.props.fetchTrips({type: 'FETCH_TRIPS', payload: {name: 'England/Ireland Trip'}})
}