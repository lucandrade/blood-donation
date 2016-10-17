'use strict';

import Dispatcher from '../dispatcher';
import ActionConstants from '../constants/ActionConstants';

export function switchUserType() {
    Dispatcher.dispatch({
        type: ActionConstants.switchUserType
    });
}
