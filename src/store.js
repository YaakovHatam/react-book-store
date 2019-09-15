
export const ACTIONS = {
    'ADD': 'ADD'
}
const createStore = (reducer) => {
    let internalState = { // model
        books: []
    };
    const handlers = [];

    return {
        dispatch: (action, params) => {
            internalState = reducer(internalState, action, params);
            handlers.forEach(h => h());
        },
        subscribe: (h) => {
            handlers.push(h);
        },
        getState: () => internalState
    }
}

const reducer = (model, action, params) => {
    const actions = {
        'ADD': (model) => {
            model.books.push(params.id);
            return model;
        }
    }

    return actions[action](model);
}

export const container = createStore(reducer);
