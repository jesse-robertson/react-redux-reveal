import {
    connecting, 
    connected, 
    reconnecting, 
    connectionFailed
} from './actions';

export default uri => store => {
    let ws;
    let hasEverConnected = false;
    const RECONNECT_TIMEOUT_MS = 2000;
    const ACTION = 'ACTION';
    
    const connect = () => {
        ws = new WebSocket(uri);  
        
        // NOTE: could maybe set a flat 'hasBeenOpenBefore' to help with error states/dispatches and such
        ws.onopen = () => {
            hasEverConnected = true;
            store.dispatch(connected());
        };
       
        ws.onclose = function() {
            if (hasEverConnected) {
                store.dispatch(reconnecting());
                setTimeout(connect, RECONNECT_TIMEOUT_MS);    
            } else {
                //TODO: THIS TAKES A LOOOOONG TIME ON CHROME... MAYBE BUILD SOME EXTRA DISPATCHES?
                store.dispatch(connectionFailed());
            }
        };
        
        ws.onmessage = ({data}) => {
            const serverAction = JSON.parse(data);
            if (serverAction.type == ACTION) {
                const localAction = serverAction.payload;
                store.dispatch(localAction);
            }
        };
    };
    
    store.dispatch(connecting());
    connect();

    return next => action => {
        if(WebSocket.OPEN === ws.readyState && action.meta && action.meta.remote) {
            const serverAction = JSON.stringify({
                type: ACTION,
                payload: action
            });
            ws.send(serverAction);
        }
        return next(action);   
    };
};