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

    render() {
    return (
        <div>
    
           <strong>{this.props.city.location}</strong> 
            <br></br> Hotel: {this.props.city.hotel}
            <br></br> Restaurants: {this.props.city.restaurants} 
            <br></br> Activities: {this.props.city.activities} 
            <br></br>  
            <Button variant="dark" onClick={() => this.props.handleDelete(this.props.city)}>Delete</Button><br></br><br></br>
            <Button className="like" variant="dark" onClick={() => this.toggleShow()}>Like</Button><br></br><br></br>
            {this.state.like ? <h1>liked!!</h1> : null}
    
        </div>
    )
}
}

export default City