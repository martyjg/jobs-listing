import * as actionTypes from '../constants/action-types';
// import axios from 'axios';

export const getJobs = () => {
// export const getJobs = () => async (dispatch) => {
// export const getJobs = () => dispatch => {
    const data = [
        {
            id: 1,
            title: 'Front End Developer',
            location: 'Berlin'
        },
        {
            id: 2,
            title: 'Product Manager',
            location: 'London'
        }
    ];
    return {
        type: actionTypes.GET_JOBS,
        payload: data
    }
};
