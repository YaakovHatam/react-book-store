export const ACTIONS = {
    'ADD': 'ADD',
    'REMOVE': 'REMOVE'
}

const reducer = (m, action, params) => {
    const updates = {
        ADD: (m, params) => { 
            m.books.push(params.bookid);
            return m;
        },
        REMOVE: (m, params) => {
            const idx = m.books.indexOf(params.bookid);
            m.books.splice(idx, 1);
            return m;
        }
    }
    return updates[action](m, params);
}

const createStore = (reducer) => {
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
}

export const container = createStore(reducer);