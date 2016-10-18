'use strict';

import React from 'react';

import * as Actions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';

export default class Menu extends React.Component {
    render() {
        const { isDonor, handleClick } = this.props;
        return (
            <div className="nav-right">
                <span className="nav-item">
                    <span className="button is-primary">
                        <span onClick={handleClick}>
                            Switch to {isDonor ? 'patient' : 'donor'}
                        </span>
                    </span>
                </span>
            </div>
        );
    }
}
