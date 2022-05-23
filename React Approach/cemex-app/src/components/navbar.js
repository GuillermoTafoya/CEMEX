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
                <Navbar dark className = "GlassMorphism" expand="md">
                <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className=" mr-auto" href="/"><img src='../../logo192.png' height="30" width="41" alt='CEMEX' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/usuario'><span className="fa fa-lg"></span> Perfil</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/logros'><span className="fa fa-lg"></span>Logros</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/configuracion'><span className="fa fa-lg"></span> Configuración</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/juego'><span className="fa fa-lg"></span> Juego</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/soporte'><span className="fa fa-lg"></span> Soporte</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/estadisticas'><span className="fa fa-lg"></span> Estadisticas</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
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