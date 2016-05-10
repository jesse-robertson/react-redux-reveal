import {applyMiddleware} from 'redux';

import websocket from './websocket';

export default applyMiddleware(
    websocket
);