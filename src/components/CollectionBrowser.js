import React from 'react';
import { marshmallowMonsters, untitledLips, untitledNails, lumene } from '../collection-data';
import Slideshow from './Slideshow';

function randomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const CollectionBrowser = () => {
    return (
        <div>
            {[marshmallowMonsters, untitledLips, untitledNails, lumene].map((collection, i) => {
                const interval = randomIntInRange(600, 850);
                return <Slideshow key={i} collectionInformation={collection} interval={interval} numberInRotation={4} />
            })}
        </div>
    );
};

export default CollectionBrowser;