import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from '../components/template/Header';
import SideMenu from  '../components/template/SideMenu';
import Footer from '../components/template/Footer';
import Main from '../components/template/Main';
import Routes from '../Routes';



export default props => (
    <BrowserRouter>
        <div className="app">
            <Header/>
            <SideMenu/>
            <Main>
                <Routes/>
            </Main>
            <Footer/>
        </div>
    </BrowserRouter>
)