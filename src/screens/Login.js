import React from 'react';
import styled from 'styled-components';
import { Icon, Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, #00b4db, #0083b0); 
    min-height: 100vh;
`;

const LoginBox = styled.div`
    display: flex;
    justify-content: center;
    min-height: 75vh;
    min-width: 50%;
    background: #fff;
`;



export default props => (
    <Container>
        <LoginBox>
        </LoginBox>
    </Container>
)