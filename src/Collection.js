import React, { Component } from 'react';
import Photo from './Photo';

class Collection extends Component {
//initialize gallery with all images and info ready to go? then make visible upon click?
//needs some initial picture that when clicked opens up gallery of all images
    render() {
        console.log('you got into collection!')
        console.log(this.props.images)
        return(
            <div>
            {this.props.images.map((photo, i) => <Photo key={i} path={photo.path} description={photo.description} />)}
        </div>
        )
}
}

export default Collection;
