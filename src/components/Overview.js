import React from 'react';
import { allCollections } from '../collection-data';
import Slideshow from './Slideshow';

function randomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Overview = () => {
    return (
        <div>
            {/* <img src='/BLATOSPHERE/Nail_polish_textures_022 .jpg' className="cover-image" alt='pic'/> */}
            {allCollections.map((collection, i) => {
                const interval = randomIntInRange(600, 850);
                return <Slideshow key={i} collectionInformation={collection} interval={interval} numberInRotation={4} />
            })}
        </div>
    );
};

export default Overview;
