import React from 'react'
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux'
import {addLike} from '../actions/addLike'
import Form from 'react-bootstrap/Form'

//const City = (props) => {
class Like extends React.Component{


    render() {
        console.log(this.props, "one like props")
    return (
        <div>
       {this.props.like.id} -
       {this.props.like.count}
        </div>
    )
}
}

export default Like


