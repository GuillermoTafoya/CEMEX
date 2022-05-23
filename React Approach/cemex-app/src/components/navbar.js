import React, { useState, Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import "./navbar.scss";
import {NavLink} from 'react-router-dom';

class NavBar extends Component{
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() { 
        return(
            <div>
                <Navbar dark fixed="top"  collapseOnSelect className = "GlassMorphism" expand="md">
                <div className="container">
                        <NavbarBrand className=" mr-auto" href="/"><img src='../../logo192.png' height="30" width="41" alt='CEMEX' /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        
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
                </Navbar>
                <div className="spacer" /><div className="spacer" />
            </div>
            
                
        );
    };
}
/*
    <Route path="/" element={<LoginView mode={'login'} onSubmit={loginRouteChange} />} />
    <Route path="login" element={<LoginView mode={'login'} onSubmit={loginRouteChange} />} />
    <Route path="logros" element={<AchievementsView />} />
    <Route path="usuario" element={ <UserView />} />
    <Route path="juego" element={ <GameView />} />
    <Route path="configuracion" element={ <ConfigurationView />} />
    <Route path="soporte" element={ <ContactView />} />
    <Route path="estadisticas" element={ <StatisticsView />} />
    <Route path="*" element={<PageNotFound /> } />
*/

/*
                <ul>
                <li>
                    <Link to="/usuario">Perfil</Link>
                </li>
                <li>
                    <Link to="/logros">Logros</Link>
                </li>
                <li>
                    <Link to="/configuracion">Configuracion</Link>
                </li>
                <li>
                    <Link to="/juego">Juego</Link>
                </li>
                <li>
                    <Link to="/soporte">Soporte</Link>
                </li>
                <li>
                    <Link to="/estadisticas">Estadisticas</Link>
                </li>
                </ul>
*/
export default NavBar;