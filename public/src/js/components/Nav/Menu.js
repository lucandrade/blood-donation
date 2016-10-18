'use strict';

import React from 'react';
import UserType from './Menu/UserType';
import Language from './Menu/Language';

export default class Menu extends React.Component {
    render() {
        const { isDonor, handleClick } = this.props;
        return (
            <div className="nav-right">
                <span className="nav-item">
                    <p className="control has-addons">
                        <UserType
                            isDonor={isDonor}
                            handleClick={handleClick} />
                        <Language />
                    </p>
                </span>
            </div>
        );
    }
}
