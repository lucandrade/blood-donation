'use strict';

import React from 'react';

export default class UserType extends React.Component {
    render() {
        const { isDonor, handleClick } = this.props;
        return (
            <span className="button is-primary">
                <span onClick={handleClick}>
                    Switch to {isDonor ? 'patient' : 'donor'}
                </span>
            </span>
        );
    }
}
