import React from 'react';
import Header from './components/Header';
import { renderRoutes } from 'react-router-config';
import styled from 'styled-components';

const AppContainer = styled.div`
    background-color: #B3B5BB;
`;

const PageContainer = styled.article`
    max-width: 1024px;
    min-height: calc(100vh - 80px);
    margin: 0 auto;
    padding: 15px 30px;
    background-color: #ffffff;
    box-sizing: border-box;
`;

const App = ({ route }) => (
    <AppContainer>
        <Header />
        <PageContainer>
            {renderRoutes(route.routes)}
        </PageContainer>
    </AppContainer>
);

export default {
    component: App
};
