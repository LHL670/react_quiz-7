import React, { Component } from 'react';


class Title extends Component {
    render () {
        return <h1 style={headerStyle}>CGU Todo list</h1>
    }
}

const headerStyle = {
    background:"black",
    color: "#fff",
    textAlign: 'center',
    padding: '10px'
}



export default Title;