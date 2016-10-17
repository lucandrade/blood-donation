'use strict';

import { EventEmitter } from "events";
import Dispatcher from '../dispatcher';
import ActionConstants from '../constants/ActionConstants';

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.userType = 'donor';
    }

    switchUserType() {
        this.userType = this.userType == 'patient' ? 'donor' : 'patient';
        this.emit('change');
    }

    isDonor() {
        return this.userType == 'donor';
    }

    isPatient() {
        return this.userType == 'patient';
    }

    handleActions(action) {
        switch (action.type) {
            case ActionConstants.switchUserType:
                this.switchUserType();
                break;
        }
    }
}

const store = new AppStore;
Dispatcher.register(store.handleActions.bind(store));

export default store;
