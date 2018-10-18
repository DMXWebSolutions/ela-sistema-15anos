import './Footer.css';
import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background: red;
    color: #333;
    background: #fff;
    box-shadow: 0px 2px 5px 0px #555;

`;



export default props => (
    <Footer className="footer">
        Desenvolvido por DM<span style={{"color": "red"}}>X</span> WEB SOLUTIONS
    </Footer>
)