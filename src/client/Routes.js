import React from 'react';
import JobsList, { loadData } from './components/JobsList';

export default [
    {
        path: '/',
        component: JobsList,
        exact: true,
        loadData
    }
];
