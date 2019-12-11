import React from 'react'
import {connect} from 'react-redux'
import {addCity} from '../actions/addCity'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class CityInput extends React.Component{

    state = {
        location: '',
        hotel: '',
        restaurants: '',
        activities: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addCity(this.state, this.props.trip.id)
        this.setState({
            location: '',
            hotel: '',
            restaurants: '',
            activities: ''
        })
    }

    render(){
        return(
            <div>
               <br></br>
                <h4>Add a City</h4>
                <form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row}>
                    <Form.Label column sm="2">Location:</Form.Label>
                    <Col sm="9">
                    <Form.Control type='text' name='location' value={this.state.location} onChange={this.handleChange}></Form.Control> 
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                    <Form.Label column sm="2">Hotel:</Form.Label>
                    <Col sm="9">
                    <Form.Control type='text' name='hotel' value={this.state.hotel} onChange={this.handleChange}></Form.Control>
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                    <Form.Label column sm="2">Restaurants:</Form.Label>
                    <Col sm="9">
                    <Form.Control type='text' name='restaurants' value={this.state.restaurants} onChange={this.handleChange}></Form.Control>
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                    <Form.Label column sm="2">Activities:</Form.Label>
                    <Col sm="9">
                    <Form.Control type='text' name='activities' value={this.state.activities} onChange={this.handleChange}></Form.Control>
                    </Col>
                    </Form.Group>

                    <Button type="submit" variant="primary">Submit</Button><br></br>

                </form>
            </div>
        )
    }
}

export default connect(null, {addCity})(CityInput)