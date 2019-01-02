import React, { Component } from 'react';


class Edit extends Component {
    render () {
        return (
            <div className="Edit">
            <h3 onClick={this.props.handleClickEdit}>Hello world</h3>
          </div>   
        )
    }
}

export default Edit