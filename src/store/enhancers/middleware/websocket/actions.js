export const WEBSOCKET_PREFIX = '@@WEBSOCKET/';
export const CONNECTING        = WEBSOCKET_PREFIX + 'CONNECTING';
export const CONNECTED         = WEBSOCKET_PREFIX + 'CONNECTED';
export const CONNECTION_FAILED = WEBSOCKET_PREFIX + 'CONNECTION_FAILED';
export const RECONNECTING      = WEBSOCKET_PREFIX + 'RECONNECTING';

export const connecting       = () => ({type: CONNECTING});
export const connected        = () => ({type: CONNECTED});
export const reconnecting     = () => ({type: RECONNECTING});
export const connectionFailed = () => ({type: CONNECTION_FAILED});