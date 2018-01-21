import React from 'react';
import App from './App';
import JobsList from './components/JobsList';
import JobsDetail from './components/JobsDetail';

export default [
    {
        ...App,
        routes: [
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
        ]
    }
];
