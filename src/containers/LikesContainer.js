import React from 'react'
import LikesInput from '../components/LikesInput'
import Likes from '../components/Likes'


class LikesContainer extends React.Component{

    render(){
        return(
            <div>
                <Likes likes={this.props.trip && this.props.trip.likes} trip={this.props.trip}/>
                <LikesInput trip={this.props.trip}/>  
                
            </div>
        )
    }
}

export default LikesContainer