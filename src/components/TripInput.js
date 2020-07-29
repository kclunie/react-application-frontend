import React from 'react'
import {connect} from 'react-redux'
import {addTrip} from '../actions/addTrip'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

class TripInput extends React.Component{

    state = {
        name: '',
        date: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTrip(this.state)
        console.log("trip added", this.state)
        this.myFunction()
        this.setState({
            name: '',
            date: ''
        })
    }

    myFunction() {
        alert("Your trip is being added!")
    }

    render(){
        return (
            <div className="BackgroundNew">
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <h1 className="Title" className="AddaTrip">Add a Trip</h1>
                <br></br><br></br>
                <form onSubmit={this.handleSubmit}>
                    <br></br>
                    <Form.Group as={Row}>
                    <Form.Label column sm="2">Trip Name:</Form.Label>
                    <Col sm="9">
                    <Form.Control type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}></Form.Control><br/>
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                    <Form.Label column sm="2">Date:</Form.Label>
                    <Col sm="9">
                    <Form.Control type='text' placeholder='Date' value={this.state.date} name="date" onChange={this.handleChange}></Form.Control><br/>
                    </Col>
                    </Form.Group>

                    <Button type="submit" onclick="myFunction()" variant="primary">Submit</Button><br></br>

                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
   // debugger;
    return{
        trips: state.trips
    }
}

export default connect(mapStateToProps, {addTrip})(TripInput)