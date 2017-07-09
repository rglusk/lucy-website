import React, { Component } from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom'
import './App.css';
import Paint from './Paint';

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
        const {width,height,name} = this.state;
        return (
            <div className="App">
                <Link to="/portfolio">
                <Paint
                    style={{ 
                        backgroundImage:"url(" + logo + ")",
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'               
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



