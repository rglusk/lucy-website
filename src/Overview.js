import React from 'react';
import { allCollections } from './collection-data';
import Slideshow from './Slideshow';

const Overview = () => {
    return (
        <div>
            {allCollections.map((collection, i) =>
                <Slideshow key={i} collectionInformation={collection} interval={700} numberInRotation={3} />
            )}
        </div>
    );
};

export default Overview;
