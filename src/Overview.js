import React from 'react';
import { allCollections } from './collection-data';
import { Link } from 'react-router-dom';
import Collection from './Collection';

const Overview = () => {
    return (
        <div>
            {allCollections.map((collection, i) => <Collection key={i} images={collection} />)}
        </div>
    );
};

export default Overview;
