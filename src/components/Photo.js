import React from 'react';
import ProgressiveImage from 'react-progressive-image';

const Photo = props => {
    return (
        <div className="photo-container">
            <ProgressiveImage src={props.path} placeholder={props.placeholder}>
                {src => <img style={{height: 450}} src={src} alt={props.path} />}
            </ProgressiveImage>
            <div className="photo-overlay">
                <div className="photo-description">
                    <b>{props.title}</b>
                    <br />
                    <i>{props.description}</i>
                </div>
            </div>
        </div>
    );
};

export default Photo;
