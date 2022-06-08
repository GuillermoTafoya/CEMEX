// import React, { Component } from 'react';
import React from 'react';

// import ReactDOM from "react-dom/client";
import {Routes, Route, useNavigate} from "react-router-dom";

import LoginView from './Pages/Login.js';
import UserView from './Pages/UserView.js';
import AchievementsView from './Pages/AchievementsView.js';
import GameView from './Pages/Game.js';
import ContactView from './Pages/Contact.js';
import ConfigurationView from './Pages/Configuration';
import StatisticsView from './Pages/statistics';

import PageNotFound from './Pages/PageNotFound.js';
//node js

function App() {

// 	fetch('https://mywebsite.com/endpoint/', {
// 		method: 'POST',
  		
//   })
// })

    let navigate = useNavigate();
    
    
    const loginRouteChange = () =>{ 
      // !!! Missing user validation with mongoDB
      //// TO DO ////
      /*
      - ROUTER
      - DIFERENT FUNCTIONS, DEPENDING ON LOGIN OR SIGN IN
      */
      let path = 'usuario'; 
      navigate(path);
    }

      

  
  return (
      <Routes>
          <Route path="/" element={<LoginView mode={'login'} onSubmit={loginRouteChange} />} />
          <Route path="login" element={<LoginView mode={'login'} onSubmit={loginRouteChange} />} />
          <Route path="logros" element={<AchievementsView achievements = {["false","false","true","true","false","false"]} />} />
          <Route path="usuario" element={ <UserView />} />
          <Route path="juego" element={ <GameView />} />
          <Route path="configuracion" element={ <ConfigurationView />} />
          <Route path="soporte" element={ <ContactView />} />
          <Route path="estadisticas" element={ <StatisticsView />} />
          <Route path="*" element={<PageNotFound /> } />
          
      </Routes>
      
  );
}

export default App;
