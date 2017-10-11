import React, { Component } from 'react';
import Overdrive from 'react-overdrive';
import { allCollections } from './collection-data';
import Collection from './Collection';

class Overview extends Component {

    render() {
        return (
            <div className="overview-container">
                <Overdrive id="big-to-small-logo" duration={800}>
                    <img src="/logo.png" width="250"/>
                </Overdrive>
                <div className="menu-bar">
                    <span>collections</span>
                    <span>info</span>
                    <span>art direction</span>
                </div>
                {allCollections.map((collection, i) => <Collection key={i} images={collection} />)}
            </div>
        );
    }
}

export default Overview;
