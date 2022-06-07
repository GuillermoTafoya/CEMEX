import React, { Component } from 'react';

import ReactDOM from "react-dom/client";
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

  //Api
  const express = require("express");
  const server = express();
  server.use("/", express.static("public"));
  server.listen(3000, console.log("http://localhost:3000"));


  const boton = document.getElementById("boton");
  boton.addEventListener("click", async () => {
  const userName = document.getElementById("userInput");
  const pass = document.getElementById("passInput");
  //alert(userName.value + " " + pass.value);
  // Enviar datos al servidor mediante un POST

  //const data = { username: userName.value, password: pass.value };
  const data = { username: "Username", password: "Password" }; // Arriba original
  const opciones = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const respuesta = await fetch("http://localhost:5000/login", opciones);
  const datos = await respuesta.json();
  console.log(datos);
  if (datos.isLogin) {
    //sessionStorage.setItem("ID", datos.user.username);
    sessionStorage.setItem("ID", "EstoEsunID"); // Arriba original
    sessionStorage.setItem("username", datos.user.username);
    sessionStorage.setItem("helmetNum", datos.user.helmetNum);
    sessionStorage.setItem("ordinaryNum", datos.user.ordinaryNum);
    sessionStorage.setItem("generalNum", datos.user.generalNum);
    sessionStorage.setItem("totalNum", datos.user.totalNum);
    sessionStorage.setItem("coins", datos.user.coins);
    sessionStorage.setItem("weapon1", datos.user.weapon1);
    sessionStorage.setItem("weapon2", datos.user.weapon2);
    sessionStorage.setItem("weapon3", datos.user.weapon3);
    sessionStorage.setItem("weapon4", datos.user.weapon4);
    alert(sessionStorage.username);
    window.location = "/";
  } else {
    alert("Datos incorrectos");
  }
  });
  // /Api 

  // Regresa al inicio en caso de cerrar sesión
  window.onload = () => {
    if (sessionStorage.ID) {
    window.location = "/";
  }
  };
  //

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
