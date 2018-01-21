import React from 'react';
import Header from './components/Header';
import { renderRoutes } from 'react-router-config';
import styled from 'styled-components';

const App = ({ route }) => (
    <div>
        <Header />
        <article>
            {renderRoutes(route.routes)}
        </article>
    </div>
);

export default {
    component: App
};
