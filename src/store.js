import { createStore } from 'redux';

export const counter = (state ="", action) => {
    switch( action.type ) {
        case 'DISPLAY':
            return action.sometext ;
        default:
            return state;
    }
}

let store = createStore(counter);

export default store;