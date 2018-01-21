import React from 'react';
import JobsList from './components/JobsList';

export default [
    {
        ...JobsList,
        path: '/',
        exact: true,
    }
];
