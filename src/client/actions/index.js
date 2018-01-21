import * as actionTypes from '../constants/action-types';

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

// simulating a backend call
export const loadData = () => (dispatch) => {
    const p = Promise.resolve(data)

    return p.then((data) => {
        dispatch({
            type: actionTypes.GET_JOBS,
            payload: data
        })
    })
};
