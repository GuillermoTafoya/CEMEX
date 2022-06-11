import React, { Component, useState, useEffect } from 'react';

import ReactDOM from "react-dom/client";
import {Routes, Route, useNavigate} from "react-router-dom";

import LoginView from './Pages/Login.js';
import UserView from './Pages/UserView.js';
import AchievementsView from './Pages/AchievementsView.js';
import GameView from './Pages/Game.js';
import ContactView from './Pages/Contact.js';
import ConfigurationView from './Pages/Configuration';
import StatisticsView from './Pages/Statistics';
import LeaderboardView from './Pages/LeaderboardView.js';

import PageNotFound from './Pages/PageNotFound.js';

import Unity, {UnityContext} from "react-unity-webgl";


const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');



function App() {
  useEffect(hideLoader, []);
    const [achievements, setAchievements] = useState([]);
    useEffect(() => {
        fetch('/api/achievements')
            .then(res => res.json())
            .then(data => setAchievements(data));
    }, []);

    let navigate = useNavigate();
    
    
    const loginRouteChange = async (e) =>{ 
      e.preventDefault();
      const usernameLogin = e.target[0].value;
      const passwordLogin = e.target[1].value;
      const usernameRegister = e.target[2].value;
      const email = e.target[3].value;
      const birthday = e.target[4].value;
      const createPassword  = e.target[5].value; 
      const repeatPassword = e.target[6].value;

      if (createPassword == repeatPassword){
          navigate();
      }

      // 200 ok
          // 500 error en el server
          // 404 no coinciden usuario y contraseña
          // En base al error que devuelve, hace cosas diferentes con el fetch
          
      const payload = JSON.stringify({
        username: usernameRegister, email: email, dob: birthday, passwordRegister: createPassword
      })

    
      const response = await fetch("/userRegister", {
        method: "POST", 
        body: payload,
        headers: {
          "Content-Type": "application/json" 
        }
      });

      let path = 'usuario'; 
      navigate(path);
    }

      

  
  return (
      <Routes>
          <Route path="/" element={<LoginView mode={'login'} onSubmit={loginRouteChange} />} />
          <Route path="login" element={<LoginView mode={'login'} onSubmit={loginRouteChange} />} />
          <Route path="logros" element={<AchievementsView achievements = {["false","false","false","false","false","false"]} />} /> {/*ACHIEVEMENTS*/}
          <Route path="usuario" element={ <UserView />} />
          <Route path="juego" element={ <GameView />} />
          <Route path="configuracion" element={ <ConfigurationView />} />
          <Route path="soporte" element={ <ContactView />} />
          <Route path="estadisticas" element={ <StatisticsView />} />
          <Route path="leaderboard" element={ <LeaderboardView />} />
          <Route path="*" element={<PageNotFound /> } />
          
      </Routes>
      
  );
}

export default App;
