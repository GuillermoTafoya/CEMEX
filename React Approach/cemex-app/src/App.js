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

import ProfilePlaceholder from './assets/UserView/panda.png'; 
import Unity, {UnityContext} from "react-unity-webgl";


const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');


class user{
  constructor(username, email, passwordHash, admin, img, wins, dob, coins, ordinaryNum, generalNum, helmetNum, totalNum, numAchUnlocked, achievements, weapons) {
    this.username = username;
    this.email = email ;
    this.passwordHash = passwordHash;
    this.admin = admin ;
    this.dob = dob ;
    this.ordinaryNum = ordinaryNum ;
    this.generalNum = generalNum ;
    this.helmetNum = helmetNum ;
    this.totalNum = totalNum ;
    this.numAchUnlocked = numAchUnlocked ;
    this.weapons = weapons ;
    this.img = img;
    this.wins = wins;
    this.achievements = achievements;
    this.coins = coins;
}
}
class player {
  constructor(username, wins, score) {
      this.username = username;
      this.wins = wins;
      this.score = score;
  }
}

function App() {
  useEffect(hideLoader, []);
  const [userData, setUserData] = useState(null);
  const [leaderboardData, setLeaderboardData] = useState(null);
  const [statisticsData, setStatisticsData] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  let navigate = useNavigate()



  const loginRouteChange = mode => async (e) =>{ 
    console.log("mode of form: ",mode);
    e.preventDefault();
    const usernameLogin = e.target[0].value;
    const passwordLogin = e.target[1].value;
    const usernameRegister = e.target[2].value;
    const email = e.target[3].value;
    const birthday = e.target[4].value;
    const createPassword  = e.target[5].value; 
    const repeatPassword = e.target[6].value;

    if (mode === "signup"){ // CONDICIONAL PARA SABER SI ESTÁ EN LOGIN O EN SIGNUP, FALTA VALIDAR EL REPETIR CONTRASEÑAS

      // REGISTRO
      const payload = {
        username: usernameRegister, email: email, dob: birthday, passwordRegister: createPassword
      }

      // Envía req
      const response = await fetch("/userRegister", {
        method: "POST", 
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json" 
        }
      });
    
      const datosRegistro = await response.json(); // Obtiene res

      if(!datosRegistro.invalidUsername && !datosRegistro.invalidEmail){ // Valida que el usuario y el email no estén repetidos
        alert("¡Datos de registro válidos!");
      // Prepara datos a ser enviados
      const data = { email: usernameRegister, password: createPassword}; 
      const opciones = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };

      // Hace request
      const requestLogin = await fetch("http://localhost:5000/login", opciones);
      // Obtiene respuesta de datos
      const datos = await requestLogin.json();
        setUserData(new user(
          datos.user.username, datos.user.email, datos.user.passwordHash, datos.user.admin, ProfilePlaceholder, datos.user.wins, datos.user.dob, datos.user.coins,
          datos.user.ordinaryNum, datos.user.generalNum, datos.user.helmetNum, datos.user.totalNum, datos.user.numAchUnlocked, datos.user.achievements, datos.user.weapons
          ));
          setLeaderboardData(
            [
              new player("Johny",100,100),
              new player("Bob",90,90),
              new player("Juan",80,80),
              new player("Pedro",70,70),
              new player("Lucas",60,60),
              new player("Dylan",50,50),
              new player("Tú",0,0)
          ]
          )
          setStatisticsData(
            {
              labels: ["Wins", "Losses", "Ties"],
              data: [100, 90, 80],
            }
          )
          setLoggedIn(true);
          let path = 'usuario'; 
          navigate(path);
      }else if(datosRegistro.invalidUsername && !datosRegistro.invalidEmail){// Valida el usuario
        alert("Este usuario ya está siendo usado");
      }else if(datosRegistro.invalidEmail && !datosRegistro.invalidUsername){ // Valida el email
        alert("Este email ya está siendo usado");
      }else{
        alert("El email y el usuario ya están siendo usados");
      }
        
      // / REGISTRO
    }
    else{ // ESTÁ EN LOGIN
      // Validar Login:

      // Prepara datos a ser enviados
      const data = { email: usernameLogin, password: passwordLogin}; 
      const opciones = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };

      // Hace request
      const requestLogin = await fetch("http://localhost:5000/login", opciones);
      // Obtiene respuesta de datos
      const datos = await requestLogin.json();
    
      console.log(datos);
      if (datos.isLogin) { // Si el login fue correcto
        setUserData(new user(
          datos.user.username, datos.user.email, datos.user.passwordHash, datos.user.admin, ProfilePlaceholder, datos.user.wins, datos.user.dob, datos.user.coins,
          datos.user.ordinaryNum, datos.user.generalNum, datos.user.helmetNum, datos.user.totalNum, datos.user.numAchUnlocked, datos.user.achievements, datos.user.weapons
          ));
        //sessionStorage.setItem("username", datos.user.username);
        alert("¡Datos de Login Correctos!");
        setLeaderboardData(
          [
            new player("Johny",100,100),
            new player("Bob",90,90),
            new player("Juan",80,80),
            new player("Pedro",70,70),
            new player("Lucas",60,60),
            new player("Dylan",50,50),
            new player("Tú",0,0)
        ]
        )
        setStatisticsData(
          {
            labels: ["Wins", "Losses", "Ties"],
            data: [100, 90, 80],
          }
        )
        setLoggedIn(true);
        let path = 'usuario'; 
        navigate(path);
        // Validar contraseña repetida
        console.log("Contraseñas");

      } else {
        alert("Datos de Login incorrectos");
      }

    }

  //setUserData(new user("Usuario12345", ProfilePlaceholder,0, [100,100,50], ["false","false","true","true","false","false"], 500));
  
  
  
  }
  
/*
Flow:
Login, if not logged in -> do not show pages -> redirect to login
Get data & insert as props 
Maybe loading screen to get all data? 
Get ALL data just after logging in

*/

  
  if (loggedIn){
    return (
      <LoggedInSection fun={loginRouteChange} userData={userData} leaderboardData={leaderboardData} statisticsData={statisticsData} />
    );
  }
  else{
    return(
      <NotLoggedIn fun={loginRouteChange} />
    );
    
  }
    
}

class NotLoggedIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      fun : this.props.fun
    }
  }

  render(){
    return(
      <Routes>
          <Route path="*" element={<LoginView mode={'login'} onSubmit={this.state.fun} /> } />
      </Routes>
    );
  }
}

class LoggedInSection extends Component{
  constructor(props){
    super(props);
    this.state = {
      fun: this.props.fun,
      userData : this.props.userData,
      leaderboardData : this.props.leaderboardData,
      statisticsData : this.props.statisticsData

  }
  //console.log("User there 1:",this.state.userData)
  //console.log("User there 2:",this.props.userData)
  //console.log("Control here:",this.props.statisticsData)
  
  
  }
    render(){
      return(
          <Routes>
            <Route path="/" element={ <UserView data = {this.state.userData} />} />
            <Route path="logros" element={<AchievementsView data = {this.state.userData} />} /> 
            <Route path="usuario" element={ <UserView data = {this.state.userData} />} />
            <Route path="juego" element={ <GameView data = {this.state.userData} />} />
            <Route path="configuracion" element={ <ConfigurationView data = {this.state.userData} />} />
            <Route path="soporte" element={ <ContactView />} />
            <Route path="estadisticas" element={ <StatisticsView data = {this.state.statisticsData} />} />
            <Route path="leaderboard" element={ <LeaderboardView data = {this.state.leaderboardData} />} />
            <Route path="*" element={<PageNotFound /> } />
          </Routes>
      );
    }
}


export default App;
