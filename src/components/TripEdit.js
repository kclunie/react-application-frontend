import React from 'react'
import {connect} from 'react-redux'
import {editTrip} from '../actions/editTrip'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class TripEdit extends React.Component{

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
        let trip = {...this.state, id: this.props.trip.id}
        this.props.editTrip(trip)
        console.log("trip edited")
        this.setState({
            name: '',
            date: ''
        })
    }

    render(){
        return (
            <div>
                <br></br>
                <h2>Edit My Trip</h2>
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

                    <Button type="submit" variant="primary">Submit</Button><br></br>

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

export default connect(mapStateToProps, {editTrip})(TripEdit)