import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    display: flex;
    width: 100%;
    height: 60px;
    align-items: center;
    margin: 15px 0;
    background-color: #C5D9E2;
`;

const StyledListingItem = styled.div`
    padding: 0 15px;
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const ListingItem = ({ content }) => (
    <li>
        <StyledLink to={`/jobs/${content.slug}`}>
            <StyledListingItem>
                <h3>{content.title}</h3>
                <h4>{content.location}</h4>
            </StyledListingItem>
        </StyledLink>
    </li>
);

export default ListingItem;
