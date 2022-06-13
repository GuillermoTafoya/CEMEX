import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import "./navbar.scss";
import {NavLink} from 'react-router-dom';

class NavBar extends Component{
    constructor(props) {
        super(props);
        
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            data: this.props.data
        }
        console.log("User there 1:",this.props.data)
        console.log("User there 2:",this.state.data)
    }
    toggleNav() {
        //console.log("Esta jalando.")
        this.setState(state => ({
            isNavOpen: !(this.state.isNavOpen)
        }));
        //console.log("Esta jalando2.")
    }
    render() { 
        return(
            <div>
                <Navbar dark fixed="top" className = "GlassMorphism--navbar" expand="md">
                <div className="container align-items-center">
                        <div className="row"> 
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-4 ml-4" href="/"><img src='../../Cemex_logo.jpg' height="35" width="128" alt='CEMEX' /></NavbarBrand>
                        

                        
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
                                <NavLink className="nav-link" to='/leaderboard'>Leaderboard</NavLink>
                            </NavItem>
                            {
                                this.state.data.admin &&
                                <NavItem>
                                    <NavLink className="nav-link" to='/estadisticas'>Estadísticas</NavLink>
                                </NavItem>
                            }
                            
                            </Nav>
                        </Collapse>
                        </div>
                    </div>
                </Navbar>
                
            </div>
            
                
        );
    };
}

export default NavBar;