import React, { Component } from 'react';

class Photo extends Component {
  
  render() {
      console.log('you got into photo!')
    return <img src={this.props.path}/>
  }
}

export default Photo;
