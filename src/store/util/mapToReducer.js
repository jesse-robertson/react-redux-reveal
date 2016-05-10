
export default (init, map) => {
    return (state = init, action) => {
        const reducer = map[action.type];
        if (reducer) {
            return reducer(state, action);
        }
        return state;
    };
};
