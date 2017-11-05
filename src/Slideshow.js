import React, { Component } from 'react';
import ProgressiveImage from 'react-progressive-image';

class Slideshow extends Component {

    constructor(props) {
        super(props);
        this.state = { index: 0 };
        this.photos = this.props.collectionInformation.photos.slice(0, this.props.numberInRotation);
        this.moveToNextImage = this.moveToNextImage.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.moveToNextImage(),
            this.props.interval
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    moveToNextImage() {
        if (this.state.index < this.props.numberInRotation - 1)
            this.setState({
                index: this.state.index + 1
            });
        else {
            this.setState({
                index: 0
            });
        }
    }

    render() {
        const { index } = this.state;
        return (
            <div className="photo-container">

                <ProgressiveImage src={this.photos[index].path} placeholder={this.photos[index].placeholder}>
                    {src => <img style={{ height: 450 }} src={src} alt={this.photos[index].path} />}
                </ProgressiveImage>
            </div>
        );
    }
}

export default Slideshow;