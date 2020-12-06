import React from 'react'
import Like from './Like'

class Likes extends React.Component{

    render() {
        console.log(this.props, "likesprops")
    return(
        <div>
            <br></br><br></br>
            <h5><strong className="citiestitle">Trip Rating</strong></h5>
            <br></br>
            {this.props.likes && this.props.likes.map(like =>
            <div key={like.id}>
            <Like like={like}/>
            </div>
            )}
        </div>
    )
}

  }

export default Likes