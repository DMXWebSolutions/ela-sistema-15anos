import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    margin: 2%;
`;

export default props => (
    <Main className="content">
        {props.children}
    </Main>
)