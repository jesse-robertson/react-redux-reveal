import {createStore} from 'redux';
import reducer from './reducer';
import enhancers from './enhancers';

const store = createStore(reducer, {}, enhancers);

// Reducer Hot Reload
if (module.hot) {
    module.hot.accept('./reducer', () => {
        const nextRootReducer = require('./reducer/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;