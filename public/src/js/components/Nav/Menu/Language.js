'use strict';

import React from 'react';

export default class Language extends React.Component {
    render() {
        return (
            <span className="select is-primary">
                <select>
                    <option>EN</option>
                    <option>PT-br</option>
                </select>
            </span>
        );
    }
}
