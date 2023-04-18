import './nav.css'
import NavItem from './nav-item'
import React from 'react'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <NavItem href="" icon="home" page="Inicio" />
            <NavItem href="users" icon="users" page="Usuarios" />
        </nav>
    </aside>