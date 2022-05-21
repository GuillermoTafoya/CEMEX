import React, { useState, Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component{
    constructor(props) {
        super(props);
    }
    render() { 
        return(
            <div className = "Example">
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
    
export default NavBar;