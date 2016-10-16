'use strict';

import React from 'react';

import AppConstants from '../../constants/AppConstants';

export default class Title extends React.Component {
    render() {
        return (
            <div className="nav-center is-hidden-mobile">
                <a href="/" className="nav-item">
                    <span>{AppConstants.title}</span>
                </a>
            </div>
        );
    }
}
