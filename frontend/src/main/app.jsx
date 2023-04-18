import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import Logo from '../components/templates/logo'
import Footer from '../components/templates/footer'
import Routes from '../main/routes'
import Nav from '../components/templates/nav'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo></Logo>
            <Nav></Nav>
            <Routes></Routes>
            <Footer></Footer>
        </div>
    </BrowserRouter>

