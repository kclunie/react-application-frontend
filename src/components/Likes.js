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

      addLikee = () => {
        let newCount = this.state.count + 1;
          this.setState({
          count: newCount
        });
        this.props.addLike(this.state, this.props.trip.id)
        console.log("like added", this.state)
      };

    render() {
    
          return (
          <div>
              <br></br>
          <button onClick={this.addLikee} name='count' value={this.state.count}>Likes: {this.state.count} </button>
          <br></br>
          {/* <form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row}>
                    <Form.Label column sm="2">Location:</Form.Label>
                    <Col sm="9">
                    <Form.Control type='text' name='location' value={this.state.location} onChange={this.handleChange}></Form.Control> 
                    </Col>
                    </Form.Group>

                    <Button type="submit" variant="primary">Submit</Button><br></br>

                </form> */}
          </div> 
          )
      }
    }

    export default connect(null, {addLike})(Likes)