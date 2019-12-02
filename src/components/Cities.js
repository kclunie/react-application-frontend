import React from 'react'

const Cities = (props) => {
    console.log("yo")
    console.log(props.cities)

    return(
        <div>
            Cities
            {props.cities && props.cities.map(city =>
            <li key={city.id}> {city.location} - Hotel: {city.hotel} - {city.restaurants} - {city.activities}</li>
            )}
        </div>
    )
}

export default Cities