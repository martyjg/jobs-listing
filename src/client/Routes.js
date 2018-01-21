import React from 'react';
import JobsList from './components/JobsList';
import JobsDetail from './components/JobsDetail';

export default [
    {
        ...JobsDetail,
        path: '/jobs/:slug',
        exact: true,
    },
    {
        ...JobsList,
        path: '/',
        exact: true,
    },
    {
        ...JobsList,
        path: '/jobs',
        exact: true,
    }
];
