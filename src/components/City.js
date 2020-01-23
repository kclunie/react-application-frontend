import React from 'react'
import Button from 'react-bootstrap/Button';

//const City = (props) => {
class City extends React.Component{

    state = {
        like: false
    }

    toggleShow = () => {
        this.setState({
            like: !this.state.like
        })
    }

    // redButton = (e) => {
    //     let heart = e.target
    //     heart.style.color = "red"
    //     heart.variant= "primary"
    //     document.getElementById("myH2").style.color = "#ff0000";
    // }

      handleClick = (e) => {
        console.log("you have liked this trip")

        // let element = document.querySelector(".like");
        // element.innerHTML = 'Liked!!!';
        // element.style.backgroundColor = 'red';

        this.setState({
            like: !this.state.like
        })

        if (this.state.like == true) {
        let element = e.target
        element.innerHTML = 'Liked!!!';
        element.style.backgroundColor = 'red';
        }
        else {
            let element = e.target
            element.innerHTML = 'Like';
            element.style.backgroundColor = 'black';    
        }
      
  }

    render() {
    return (
        <div>
    
           <strong>{this.props.city.location}</strong> 
            <br></br> Hotel: {this.props.city.hotel}
            <br></br> Restaurants: {this.props.city.restaurants} 
            <br></br> Activities: {this.props.city.activities} 
            <br></br>  
            <Button variant="dark" onClick={() => this.props.handleDelete(this.props.city)}>Delete</Button><br></br><br></br>
            <Button id="myH2" className="like" variant="dark" onClick={(e) => this.handleClick(e)} >Like</Button><br></br><br></br>
            {this.state.like ? <h1>liked!!</h1> : null}
            
        
        </div>
    )
}
}

export default City

