'use strict';

import React from 'react';

import * as Actions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';

export default class Menu extends React.Component {
    constructor() {
        super();
        this.initialState = this.initialState.bind(this);
        this.updateState = this.updateState.bind(this);
        this.state = this.initialState();
    }

    initialState() {
        return {
            isDonor: AppStore.isDonor()
        }
    }

    updateState() {
        this.setState(this.initialState());
    }

    componentWillMount() {
        AppStore.on('change', this.updateState);
    }

    componentWillUnmount() {
        AppStore.removeListener('change', this.updateState);
    }

    handleClick() {
        Actions.switchUserType();
    }

    render() {
        const { isDonor } = this.state;
        return (
            <div className="nav-right">
                <span className="nav-item">
                    <span className="button is-primary">
                        <span onClick={this.handleClick.bind(this)}>
                            Switch to {isDonor ? 'patient' : 'donor'}
                        </span>
                    </span>
                </span>
            </div>
        );
    }
}
