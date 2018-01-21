import { GET_JOBS } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case GET_JOBS:
            return action.payload.data;
        default:
            return state;
    }
};
