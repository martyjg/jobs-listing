import * as actionTypes from '../constants/action-types';
// import axios from 'axios';

const data = [
    {
        id: 1,
        title: 'Front End Developer',
        location: 'Berlin',
        slug: 'front-end-developer'
    },
    {
        id: 2,
        title: 'Product Manager',
        location: 'London',
        slug: 'product-manager'
    }
];

export const getJobs = () => {
    // export const getJobs = () => async (dispatch) => {
    return {
        type: actionTypes.GET_JOBS,
        payload: data
    };
};

export const getJob = (slug) => {

    const result = data.find(obj => obj.slug === slug);

    console.log('hi', result);

    return {
        type: actionTypes.GET_JOB,
        payload: result
    };
};
