import React from 'react';
import { allCollections } from './collection-data';
import { Link } from 'react-router-dom';
import Collection from './Collection';

const Overview = () => {
    return (
        <div className="overview-container">
            <img src="/logo.png" width="250" alt="logo" />
            <div className="menu-bar">
                <Link to="collections" style={{ textDecoration: 'none' }}>
                    <span>collections</span>
                </Link>
                <Link to="/info" style={{ textDecoration: 'none' }}>
                    <span>info</span>
                </Link>
                <Link to="art-direction" style={{ textDecoration: 'none' }}>
                    <span>art direction</span>
                </Link>
            </div>
            {allCollections.map((collection, i) => <Collection key={i} images={collection} />)}
        </div>
    );
};

export default Overview;
