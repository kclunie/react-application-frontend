import React from 'react'
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux'
import {addLike} from '../actions/addLike'

//const City = (props) => {
class City extends React.Component{

    state = {
        like: false
    }

    // constructor() {
    //     super();
    //     this.state = {
    //       like: false
    //     };
    //     this.handleClick = this.handleClick.bind(this);
    //   } 

      handleClick = (e) => {
        console.log("you have liked this trip")
        console.log(this.state.like, "1")

        this.setState({
            //like: !(this.state.like)
            [e.target.name]: !(this.state.like)
        })
        e.preventDefault()
        this.props.addLike(this.state, this.props.city.trip_id)
        if (this.state.like === false) {
        let element = e.target
        element.innerHTML = 'LOVE';
        element.style.backgroundColor = 'red';
        }
        else {
            let element = e.target
            element.innerHTML = 'Like';
            element.style.backgroundColor = 'black';    
        }
        console.log(this.state.like, "2")  
  }

    render() {
        console.log(this.state.like, "3")
    return (
        <div>
    
           <h5><strong className="citiestitle">{this.props.city.location}</strong></h5>
            Hotel: {this.props.city.hotel}
            <br></br> Restaurants: {this.props.city.restaurants} 
            <br></br> Activities: {this.props.city.activities} 
            <br></br>  
            <Button variant="dark" onClick={() => this.props.handleDelete(this.props.city)}>Delete</Button>
            <Button id="myH2" className="like" variant="secondary" name='like' value={this.state.like} onClick={(e) => this.handleClick(e)} >Like</Button><br></br><br></br>
            {/* {this.state.like ? <h1>LOVE</h1> : null} */}
            {/*this.state.like ? this.redButton() : null*/}
        
        </div>
    )
}
}

//export default City
export default connect(null, {addLike})(City)

