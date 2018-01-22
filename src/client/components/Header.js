import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: #A5FFD6;
    border-bottom: 1px solid #111111;
    height: 80px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`;

const HeaderContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`;

const StyledTitle = styled.h1`
    margin: 0 15px;
`;

const Header = () => (
    <StyledHeader>
        <HeaderContainer>
            <StyledTitle>Jobs Board</StyledTitle>
        </HeaderContainer>
    </StyledHeader>
);

export default Header;
