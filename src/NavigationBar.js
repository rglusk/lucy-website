import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <img src="/logo.png" width="250" alt="logo" />
            <div className="menu-bar">
                <Link to="collections">
                    <span>collections</span>
                </Link>
                <Link to="/info">
                    <span>info</span>
                </Link>
                <Link to="art-direction">
                    <span>art direction</span>
                </Link>
            </div>
        </div>
    );
};

export default NavigationBar;
