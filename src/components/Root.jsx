// Libs
import React from 'react';
import {Provider} from 'react-redux';

import store from '../store';
import App from './App';

// Define Root Component
const Root = () => 
    <Provider store={store}>
        <App />
    </Provider>;

// Export Root Component
export default Root;