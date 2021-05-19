

import React, { Component } from 'react';


class TodoTitle extends Component {
    render () {
        return <h1 style={headerStyle}>CGU Todo list</h1>
    }
}


const headerStyle = {
    
    color: 'black',
    textAlign: 'center',
    padding: '10px'
}
export default TodoTitle;

