import {connect} from 'react-redux';

const advancedConnect = (mapStateAndDispatchToProps) => connect(
    (state) => ({state}), 
    (dispatch) => ({dispatch}), 
    ({state}, {dispatch}, ownProps) => 
        Object.assign(
            {}, 
            ownProps, 
            mapStateAndDispatchToProps(state, dispatch, ownProps)
        )
);

export default advancedConnect;