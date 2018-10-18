import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    background: #f9f9f9;
    margin: 2%;
`;

export default props => (
    <Main className="content">
        {props.children}
    </Main>
)