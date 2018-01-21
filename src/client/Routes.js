import React from 'react';
import { Route } from 'react-router-dom';
import JobsList from './components/JobsList';

export default () => {
    return (
        <div>
            <Route exact path="/" component={JobsList} />
        </div>
    );
};
