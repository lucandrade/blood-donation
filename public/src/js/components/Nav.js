'use strict';

import React from 'react';

import Logo from './Nav/Logo';
import Title from './Nav/Title';
import Menu from './Nav/Menu';

export default class Nav extends React.Component {
    render() {
        return (
            <div className="continer">
                <nav className="nav">
                    <Logo />
                    <Title />
                    <Menu />
                </nav>
            </div>
        );
    }
}
