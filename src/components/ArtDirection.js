import React from 'react';
import { kiko } from '../collection-data';
import Slideshow from './Slideshow';

function randomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const ArtDirection = () => {
    const interval = randomIntInRange(600, 850);
    return (
        <div>
            <Slideshow collectionInformation={kiko} interval={interval} numberInRotation={4} />
        </div>
    );
};

export default ArtDirection;