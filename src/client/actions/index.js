import axios from 'axios';

export const GET_JOBS = 'get_jobs';
export const getJobs = () => async dispatch => {
    const data = [
        {
            title: 'Front End Developer',
            location: 'Berlin'
        },
        {
            title: 'Product Manager',
            location: 'London'
        }
    ];
    dispatch({
        type: GET_JOBS,
        payload: data
    });
};
