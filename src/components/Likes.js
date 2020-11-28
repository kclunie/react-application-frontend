import React from 'react'
import {connect} from 'react-redux'
import {addLike} from '../actions/addLike'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Likes extends React.Component {

    state = {
        count: 0
      };

      handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log("the state now is", this.state)
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.props.addLike(this.state, this.props.trip.id)
      // this.setState({
      //     location: ''
      // })
      console.log("like added state is", this.state)
      console.log("like added trip id is", this.props.trip.id)
  }

      // addLikee = () => {
      //   // let newCount = this.state.count + 1;
      //   //   this.setState({
      //   //   count: newCount
      //   // });
      //   // console.log("state is now", this.state)
      //   this.props.addLike(this.state, this.props.trip.id)
      //   console.log("like added state is", this.state)
      //   console.log("like added trip id is", this.props.trip.id)
      // };

    render() {
    
          return (
          <div>
              <br></br>
          {/* <button onClick={this.addLikee} name='count' value={this.state.count}>Likes: {this.state.count} </button> */}
          <br></br>
          <form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row}>
                    <Form.Label column sm="2">Rate Me:</Form.Label>
                    <Col sm="2">
                    <Form.Control type='text' name='count' value={this.state.count} onChange={this.handleChange}></Form.Control> 
                    </Col>
                    </Form.Group>

                    <Button type="submit" variant="primary">Like Me</Button><br></br>
                    {/* <button type="submit" onClick={this.addLikee} name='count' value={this.state.count}>Likes: {this.state.count} </button> */}
                </form>
                <h3>{this.state.count} Stars!</h3>
          </div> 
          )
      }
    }

    export default connect(null, {addLike})(Likes)