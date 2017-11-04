import React from 'react';
import { allCollections } from './collection-data';
import Collection from './Collection';

const Overview = () => {
    return (
        <div>
            {allCollections.map((collection, i) => <Collection key={i} collectionInformation={collection} />)}
        </div>
    );
};

export default Overview;
