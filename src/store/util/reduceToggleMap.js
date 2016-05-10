import mapToReducer from './mapToReducer';

export default (actionType) => mapToReducer({}, {
    [actionType]: (toggleMap, {payload:{id}}) => 
        Object.assign({}, toggleMap, {
            [id]: !toggleMap[id]
        })
});
