import './SideMenu.css';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Aside = styled.aside`
    display: flex;
    flex-flow: column nowrap;
    background: #00adb5;
    border-right: 1px solid #a9a9a9;
    color: #f2f2f2;
    padding-top: 30px;
`;


const NavItem = styled.a`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 50px;
    justify-content: flex-start;
    padding-left: 10px;
    border: 1px dotted rgba(249, 249, 249, .4);
    border-width: 0px 0 1px 0px;
    text-decoration: none;

    &:hover {
        background: linear-gradient(to right, #76b852, #8dc26f);
        border: none;
        color: #f2f2f2;
        border: 1px dotted rgba(249, 249, 249, .4);
        border-width: 1px 0 1px 0px;

    }

    i {
        font-size: 1.5rem;
        margin-right: 10px;
        color: #f2f2f2;
    }
`;

export default props => (
    <Aside className="menu-area">
        <Link to="/inscritos" style={{ textDecoration: 'none', color: '#f2f2f2'}}>
            <NavItem className="link"><i class="icon ion-md-contacts"></i>Listagem de Inscritos</NavItem>
        </Link>
        <Link to="/respostas" style={{ textDecoration: 'none', color: '#f2f2f2'}}>
            <NavItem to="/respostas"><i class="icon ion-md-list-box"></i>Ver Respostas</NavItem>
        </Link>
        <Link to="/login" style={{ textDecoration: 'none', color: '#f2f2f2'}}>
            <NavItem><i class="icon ion-md-log-out"></i>Sair</NavItem>
        </Link>
    </Aside>
)