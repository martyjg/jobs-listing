import * as actionTypes from '../constants/action-types';

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.GET_JOBS:
            return action.payload;
        default:
            return state;
    }
};
