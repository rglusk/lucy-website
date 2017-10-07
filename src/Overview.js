import React, { Component } from 'react';
import { ParallaxController } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import Overdrive from 'react-overdrive';
import { allCollections } from './collection-data';
import Collection from './Collection';

class Overview extends Component {

    render() {
        return (
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Overdrive id="big-to-small-logo" duration={800}>
                    <img src="/logo.png" width="250" style={{ margin: 5 }} />
                </Overdrive>
                <h3>Hi there</h3>
                <p>whats up dawg</p>
                {allCollections.map((collection, i) =>  <Collection key={i} images={collection} />)}
            </div>
        );
    }
}

export default Overview;
