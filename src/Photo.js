import React, { Component } from 'react';

class Photo extends Component {

  render() {
    return <div className="photo-container">
          <img src={this.props.path} style={{ width: 350 }} />
          <div className="photo-overlay">
            <div className="photo-description">{this.props.description}</div>
          </div>
    </div>
  }
}

export default Photo;
