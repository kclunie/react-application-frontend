import React from 'react'

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


