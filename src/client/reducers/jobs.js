import * as actionTypes from '../constants/action-types';

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.LOAD_DATA:
            return action.payload;
        default:
            return state;
    }
};
