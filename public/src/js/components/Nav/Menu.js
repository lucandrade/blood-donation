'use strict';

import React from 'react';

export default class Menu extends React.Component {
    render() {
        return (
            <div className="nav-right">
                <span className="nav-item">
                    <span className="button is-primary">
                        <span>
                            Switch to patient
                        </span>
                    </span>
                </span>
            </div>
        );
    }
}
