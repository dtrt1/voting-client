/**
 * Created by DTRT on 04.03.2017.
 */
import {Map} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

export default function(state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
    }
    return state;
}
