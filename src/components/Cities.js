import React from 'react'
import {connect} from 'react-redux'
import {deleteCity} from '../actions/deleteCity'
import Button from 'react-bootstrap/Button';
import City from './City'


// const Cities = (props) => {
//     console.log("yo")
//     console.log(props.cities)

//     const handleDelete = (city) => {
//         console.log('a')
//         props.deleteCity(city.id, city.trip_id)
//         console.log('b')
//     }

//   const handleClick = () => {
//     console.log("you have liked this trip")
//     let element = document.querySelector(".like");
//     element.innerHTML = 'Liked!!!';
//     element.style.backgroundColor = 'red';
//   }


  class Cities extends React.Component{

    state = {
        like: false
    }

    toggleShow = () => {
        this.setState({
            like: !this.state.like
        })
    }

    handleDelete = (city) => {
              console.log('a')
              this.props.deleteCity(city.id, city.trip_id)
              console.log('b')
          }
   
    render() {

    return(
        <div>
            <br></br><br></br>
            <h3 className="CitiesExplored">Cities Explored</h3>
            <br></br>
            {this.props.cities && this.props.cities.map(city =>
            <div key={city.id}>
            <City city={city} handleDelete={this.handleDelete} handleClick={this.handleClick} onClick={this.toggleShow} like={this.state.like}/>
            </div>
            )}
           

        </div>
    )
}

  }

export default connect(null, {deleteCity})(Cities)