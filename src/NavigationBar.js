import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className="overview-container">
            <Link to="overview">
                <img src="/logo.png" width="250" alt="logo" />
            </Link>
            <div className="menu-bar">
                <Link to="collections">
                    <span>styling</span>
                </Link>
                <Link to="info">
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
