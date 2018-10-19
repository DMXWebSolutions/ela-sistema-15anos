import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/imgs/logo-ela.png';

const Header = styled.header`
    display: flex;
    background: #badc58;
    align-items: center;
    box-shadow: 0px 1px 5px 0px #555;
    z-index: 10000

`;

const Logo = styled.img`
    position: absolute;
    width: 60px;
    height: 90px;
    margin-top: 15px;
    margin-left: 80px;
`;

export default props => (
    <Header className="header">
        <Logo src={logo}/>
    </Header>
)