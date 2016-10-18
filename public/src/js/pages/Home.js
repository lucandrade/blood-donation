'use strict';

import React from 'react';

import Nav from '../components/Nav';
import AppStore from '../stores/AppStore';
import * as Actions from '../actions/AppActions';

export default class Home extends React.Component {
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

    handleSwitchUserType() {
        Actions.switchUserType();
    }

    render() {
        const { isDonor } = this.state;
        return (
            <div>
                <Nav
                    handleSwitchUserType={this.handleSwitchUserType.bind(this)}
                    isDonor={isDonor} />
                Aqui
            </div>
        );
    }
}
