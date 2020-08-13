import React from 'react'
import {connect} from 'react-redux'
import {addLike} from '../actions/addLike'

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
      };

    render() {
    
          return (
          <div>
              <br></br>
          <button onClick={this.addLikee}>Likes: {this.state.count} </button>
          </div> 
          )
      }
    }

    export default connect(null, {addLike})(Likes)