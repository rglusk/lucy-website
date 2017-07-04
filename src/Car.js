import React, { Component } from 'react';

export default class Car extends Component {

    handleClick(){
        const { onHonk } = this.props;
        onHonk('Riley');
    }

    render(){
        const { color } = this.props;
        const backgroundColorCSS = { backgroundColor: color };
        return <div style={backgroundColorCSS}>
        <button onClick={this.handleClick.bind(this)}>Honk</button>
        </div>
    }
}
