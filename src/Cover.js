import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paint from './Paint';

export default class Cover extends Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
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
        const { width, height } = this.state;
        return (
            <div className="App">
                <Link to="/overview">
                    <div className="logo-container">
                            <img src="/logo.png" width="800" alt="logo-large"/>
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
