import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paint from './Paint';
import Overdrive from 'react-overdrive';

class Cover extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', width: 0, height: '0' };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        const { width, height, name } = this.state;
        return (
            <div className="App">
                <Link to="/overview">
                    <div className="logo-container">
                        <Overdrive id="big-to-small-logo">
                            <img src="/logo.png" width="800" />
                        </Overdrive>
                    </div>
                    <Paint
                        style={{
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            position: 'absolute',
                            top: 0,
                            left: 0
                        }}
                        width={width}
                        height={height}
                    />
                </Link>
            </div>
        );
    }
}

export default Cover;
