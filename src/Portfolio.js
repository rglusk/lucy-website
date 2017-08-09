import React, { Component } from 'react';
import { ParallaxController } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                { path: '/PERSONAL/MAKEUP_TEST_006.png', offsetXMax: 10, offsetXMin: -10, slowerScrollRate: true },
                { path: '/PERSONAL/MAKEUP_TEST_013.png', offsetXMax: 50, offsetXMin: -10, slowerScrollRate: false },
                { path: '/PERSONAL/MAKEUP_TEST_017.png', offsetXMax: 10, offsetXMin: -10, slowerScrollRate: true },
                { path: '/PERSONAL/MAKEUP_TEST_033.png', offsetXMax: 10, offsetXMin: -10, slowerScrollRate: false },
                { path: '/PERSONAL/MAKEUP_TEST_049.png', offsetXMax: 10, offsetXMin: -10, slowerScrollRate: true },
                { path: '/PERSONAL/MAKEUP_TEST_051.png', offsetXMax: 10, offsetXMin: -10, slowerScrollRate: false },
                { path: '/PERSONAL/MAKEUP_TEST_052.png', offsetXMax: 10, offsetXMin: -10, slowerScrollRate: true },
                { path: '/PERSONAL/MAKEUP_TEST_053.png', offsetXMax: 10, offsetXMin: -10, slowerScrollRate: false },
                { path: '/PERSONAL/MAKEUP_TEST_055a.png', offsetXMax: 10, offsetXMin: -10, slowerScrollRate: true },
            ]
        };
        ParallaxController.init();
    }

    render() {
        return <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>Hi there</h3>
            <p>whats up dawg</p>
            {this.state.images.map((image, i) => <Parallax
                key={image.path}
                disabled={false}
                offsetXMax={image.offsetXMax}
                offsetXMin={image.offsetXMin}
                slowerScrollRate={image.slowerScrollRate}
                tag="figure"
            >
                <img src={image.path} height="800vh" />
            </Parallax>)}
        </div>;
    }
}

export default Portfolio;