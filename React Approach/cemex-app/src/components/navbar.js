import React, { useState, Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import "./navbar.scss";
import {NavLink} from 'react-router-dom';

class NavBar extends Component{
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {isNavOpen: false};
    }
    toggleNav() {
        console.log("Esta jalando.")
        this.setState(state => ({
            isNavOpen: !(this.state.isNavOpen)
        }));
        console.log("Esta jalando2.")
    }
    render() { 
        return(
            <div>
                <Navbar dark fixed="top"  collapseOnSelect className = "GlassMorphism" expand="md">
                <div className="container">
                        <div className="row"> 
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className=" mr-auto" href="/"><img src='../../logo192.png' height="40" width="40" alt='CEMEX' /></NavbarBrand>

                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/usuario'>Perfil</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/logros'>Logros</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/configuracion'>Configuración</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/juego'>Juego</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/soporte'>Soporte</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/estadisticas'>Estadisticas</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                        </div>
                    </div>
                </Navbar>
                <div className="spacer" /><div className="spacer" />
            </div>
            
                
        );
    };
}

export default NavBar;