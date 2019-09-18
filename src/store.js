import { createStore } from 'redux';

export const ACTIONS = {
    'ADD': 'ADD',
    'REMOVE': 'REMOVE'
}

const reducer = (m = {books: []}, action) => {
    const updates = {
        ADD: (m) => { 
            m.books.push(action.book);
            return m;
        },
        REMOVE: (m) => {
            const idx = m.books.indexOf(action.bookid);
            m.books.splice(idx, 1);
            return m;
        }
    }
    return (updates[action.type] || ((m) => m))(m);
}

/*const createStore = (reducer) => {
    let internalState = {
        books: []
    }
    const handlers = [];

    return {
        dispatch: (action, params) => {
            internalState = reducer(internalState, action, params);
            handlers.forEach(h => h());
            console.log(internalState);
        },
        subscribe: (h) => handlers.push(h),
        getState: () => internalState
    }
}*/

export const container = createStore(reducer, {
    books: []
});