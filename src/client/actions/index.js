import * as actionTypes from '../constants/action-types';

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
    },
    {
        id: 3,
        title: 'UX Designer',
        location: 'Beijing',
        slug: 'ux-designer'
    },
    {
        id: 4,
        title: 'QA Specialist',
        location: 'London',
        slug: 'qa-specialist'
    },
    {
        id: 5,
        title: 'Back End Developer',
        location: 'Berlin',
        slug: 'back-end-developer'
    },
    {
        id: 6,
        title: 'Front End Developer',
        location: 'London',
        slug: 'front-end-developer-2'
    },
    {
        id: 7,
        title: 'iOS Dev',
        location: 'Berlin',
        slug: 'ios-dev'
    },
    {
        id: 8,
        title: 'Scrum Master',
        location: 'London',
        slug: 'scrum-master'
    },
];
