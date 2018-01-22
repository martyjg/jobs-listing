import { combineReducers } from 'redux';
import jobs from './jobs';

export default combineReducers({
    jobs
});

export const getJobBySlug = (state, slug) => {
    const result = state.jobs.find(obj => obj.slug === slug)
    return result;
};
