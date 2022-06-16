import React, { Component, useState, useEffect } from 'react';


import { useSessionStorage } from './components/useStorage.js';

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
import NotAdmin from './Pages/NotAdmin.js';

import PageNotFound from './Pages/PageNotFound.js';

import ProfilePlaceholder from './assets/UserView/panda.png'; 

import NavBar from "./components/navbar.js";


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

function App() {
  const [userData, setUserData] = useSessionStorage('userData',null);
  const [leaderboardData, setLeaderboardData] = useSessionStorage('leaderboardData',null);
  const [statisticsData, setStatisticsData] = useSessionStorage('statisticsData',null);
  const [loggedIn, setLoggedIn] = useSessionStorage('loggedIn',false);
  let navigate = useNavigate()


  function updateLoggedIn(){
    sessionStorage.getItem('loggedIn') 
    

    
    /*
    console.log(
      "Session Storage:", 
      sessionStorage.getItem('user'), 
      sessionStorage.getItem('leaderboardData'), 
      sessionStorage.getItem('statisticsData'), 
      sessionStorage.getItem('loggedIn'))
    console.log("Updating Logged In")
    */
  }


  useEffect(() => {
    const interval = setInterval(() => {
      updateLoggedIn();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  

  const loginRouteChange = mode => async (e) =>{ 
    //console.log("mode of form: ",mode);
    //console.log("e: ",e.target.elements);
    //console.log("all use states 1: ",userData, leaderboardData, statisticsData, loggedIn);
    e.preventDefault();
    const usernameLogin = e.target[0].value;
    const passwordLogin = e.target[1].value;
    const usernameRegister = e.target[2].value;
    const email = e.target[3].value;
    const birthday = e.target[4].value;
    const createPassword  = e.target[5].value; 
    const repeatPassword = e.target[6].value;
    sessionStorage.setItem("username", usernameLogin);
    if (mode === "signup"){ // CONDICIONAL PARA SABER SI ESTÁ EN LOGIN O EN SIGNUP, FALTA VALIDAR EL REPETIR CONTRASEÑAS

      // REGISTRO
      if( createPassword  !== repeatPassword){
        alert("Las contraseñas no coincden");
        return;
      }
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
      const data = { email: email, password: createPassword}; 
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
          datos.user.username, datos.user.email, datos.user.passwordHash, datos.user.admin, datos.user.img ? datos.user.img : ProfilePlaceholder , datos.user.wins, datos.user.dob, datos.user.coins,
          datos.user.ordinaryNum, datos.user.generalNum, datos.user.helmetNum, datos.user.totalNum, datos.user.numAchUnlocked, datos.user.achievements, datos.user.weapons
          ));

      // Hace request
      const requestLeaderboard = await fetch(`http://localhost:5000/leaderboard?username=${datos.user.username}`, {
        method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
    })
      
      
      const datosLeaderboard = await requestLeaderboard.json();
      //console.log("leader",datosLeaderboard)


      // Obtiene respuesta de datos
      //const datos = await requestLogin.json();
          
          setLeaderboardData(
            datosLeaderboard
          )


          // Hace request
      const requestStats = await fetch("http://localhost:5000/stats", {
        method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
    })
      
      
          const datosStats= await requestStats.json();

          setStatisticsData(
            {
              // avgCoins, avgWins, avgOrdinary, avgGeneral, avgHelmet, avgTotal
              labels: ["Average Coins", "Average Wins", "Average Ordinary", "Average General", "Average Helmet", "Average Total Army"],
              data: [datosStats.avgCoins, datosStats.avgWins, datosStats.avgOrdinary, datosStats.avgGeneral, datosStats.avgHelmet, datosStats.avgTotal]
            }
          )

          setLoggedIn(true);

            sessionStorage.setItem('user', JSON.stringify(userData));
            sessionStorage.setItem('leaderboardData', JSON.stringify(leaderboardData));
            sessionStorage.setItem('statisticsData', JSON.stringify(statisticsData));
            sessionStorage.setItem('loggedIn', JSON.stringify(loggedIn));
        
            //console.log("all use states 0: ",userData, leaderboardData, statisticsData, loggedIn);
            //console.log("all session storage: ",sessionStorage.getItem('user'), sessionStorage.getItem('leaderboardData'), sessionStorage.getItem('statisticsData'), sessionStorage.getItem('loggedIn'));
            //console.log("Cccc", sessionStorage.getItem('user'));

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
    
      //console.log("Datos:",datos);

      if (datos.isLogin) { // Si el login fue correcto


        setUserData(new user(
          datos.user.username, datos.user.email, datos.user.passwordHash, datos.user.admin, datos.user.img ? datos.user.img : ProfilePlaceholder, datos.user.wins, datos.user.dob, datos.user.coins,
          datos.user.ordinaryNum, datos.user.generalNum, datos.user.helmetNum, datos.user.totalNum, datos.user.numAchUnlocked, datos.user.achievements, datos.user.weapons
          ));

        //alert("¡Datos de Login Correctos!");


        // Hace request
        const requestLeaderboard = await fetch(`http://localhost:5000/leaderboard?username=${datos.user.username}`, {
          method: 'GET',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              }
      })
        
        
        const datosLeaderboard = await requestLeaderboard.json();
        //console.log("leader",datosLeaderboard)
  
  
        // Obtiene respuesta de datos
        //const datos = await requestLogin.json();
            
            setLeaderboardData(
              datosLeaderboard
            )

        // Hace request
      const requestStats = await fetch("http://localhost:5000/stats", {
        method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
    })
      
      
          const datosStats= await requestStats.json();

          setStatisticsData(
            {
              // avgCoins, avgWins, avgOrdinary, avgGeneral, avgHelmet, avgTotal
              labels: ["Average Coins", "Average Wins", "Average Ordinary", "Average General", "Average Helmet", "Average Total Army"],
              data: [datosStats.avgCoins, datosStats.avgWins, datosStats.avgOrdinary, datosStats.avgGeneral, datosStats.avgHelmet, datosStats.avgTotal]
            }
          )


        setLoggedIn(true);


        
    
          sessionStorage.setItem('user', JSON.stringify(userData));
          sessionStorage.setItem('leaderboardData', JSON.stringify(leaderboardData));
          sessionStorage.setItem('statisticsData', JSON.stringify(statisticsData));
          sessionStorage.setItem('loggedIn', JSON.stringify(loggedIn));
      
          //console.log("all use states 0: ",userData, leaderboardData, statisticsData, loggedIn);
          //console.log("all session storage: ",sessionStorage.getItem('user'), sessionStorage.getItem('leaderboardData'), sessionStorage.getItem('statisticsData'), sessionStorage.getItem('loggedIn'));
          //console.log("Cccc", sessionStorage.getItem('user'));  
      
        

        //console.log("all use states 2: ",userData, leaderboardData, statisticsData, loggedIn);

        let path = 'usuario'; 
        navigate(path);
        // Validar contraseña repetida

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

  
  
  if (loggedIn === true){
    //console.log("Control:",userData)
    //console.log("Control2222:",loggedIn)
    return (
      <LoggedInSection fun={loginRouteChange} userData={userData} leaderboardData={leaderboardData} statisticsData={statisticsData} />
    );
  }
  else if (loggedIn === false){
    return(
      <NotLoggedIn fun={loginRouteChange} />
    );
    
  }
  else {
    console.log("Error:",loggedIn)
    setLoggedIn(false)
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
      <div className="app">
        <Routes>
            <Route path="*" element={<LoginView mode={'login'} onSubmit={this.state.fun} /> } />
        </Routes>
      </div>
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
      statisticsData : this.props.statisticsData,
      currentPage: 'usuario',
      showNav: true,
  }
    
    this.updateState = this.updateState.bind(this);
    this.updateCurrentPage = this.updateCurrentPage.bind(this);
    this.updateNavbar = this.updateNavbar.bind(this);
    //console.log("Control1:",this.state.userData)
    //console.log("Control2:",this.props.userData)
  }



  componentDidMount() {
    this.updateState()
    setInterval(this.updateState, 1e3); // x seconds
  }
  updateNavbar(){
    this.setState({
      showNav: !this.state.showNav
    })
  }

  async updateData(){
    
    try{
      //console.log("Initial State:", this.state)
      // Print session storage
      /*
      console.log(
        "Session Storage:", 
        sessionStorage.getItem('user'), 
        sessionStorage.getItem('leaderboardData'), 
        sessionStorage.getItem('statisticsData'), 
        sessionStorage.getItem('loggedIn'))
      */
    const userFromSession = JSON.parse(sessionStorage.getItem('userData'));


      const requestUser = await fetch(`http://localhost:5000/user?username=${userFromSession.username}`, {
        method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
    })
      const datos = await requestUser.json();

      
      const requestLeaderboard = await fetch(`http://localhost:5000/leaderboard?username=${datos.username}`, {
        method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
    })
        const datosLeaderboard = await requestLeaderboard.json();

        const requestStats = await fetch("http://localhost:5000/stats", {
          method: 'GET',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              }
      })
            const datosStats= await requestStats.json();

            const newData = {
              userData: new user(
              datos.username, datos.email, datos.passwordHash, datos.admin, datos.img ? datos.img : ProfilePlaceholder, datos.wins, datos.dob, datos.coins,
              datos.ordinaryNum, datos.generalNum, datos.helmetNum, datos.totalNum, datos.numAchUnlocked, datos.achievements, datos.weapons
              ),
              leaderboardData: datosLeaderboard,
              statisticsData:{
                labels: ["Average Coins", "Average Wins", "Average Ordinary", "Average General", "Average Helmet", "Average Total Army"],
                data: [datosStats.avgCoins, datosStats.avgWins, datosStats.avgOrdinary, datosStats.avgGeneral, datosStats.avgHelmet, datosStats.avgTotal]
              },
            }
            //console.log("New Data:", newData)
            //console.log("Updated State:", this.state)

            return newData;
      }
      catch(error){
        console.log("Error:", error)
      }
}
updateState(){
  //console.log(this.state.currentPage)
    if (this.state.currentPage !== 'juego'){
      this.updateData().then(data => {
        //console.log("Updated")
        //console.log("Data:", data)
        this.setState(
          data
        );
        //console.log("Debug",this.state.userData)
        sessionStorage.setItem('userData', JSON.stringify(this.state.userData));
        sessionStorage.setItem('leaderboardData', JSON.stringify(this.state.leaderboardData));
        sessionStorage.setItem('statisticsData', JSON.stringify(this.state.statisticsData));
      }
      )
    }
  
}
  updateCurrentPage(page){
    this.setState({currentPage: page})
  }  
    render(){
      return(
        <div className="App">
          {this.state.showNav && <NavBar data = {this.state.userData} />}
          <Routes>
            <Route path="/" element={<UserView data = {this.state.userData} updateCurrentPage={this.updateCurrentPage} /> } />
            <Route path="logros" element={<AchievementsView data = {this.state.userData} updateCurrentPage={this.updateCurrentPage}/>} /> 
            <Route path="usuario" element={ <UserView data = {this.state.userData} updateCurrentPage={this.updateCurrentPage}/>} />
            <Route path="juego" element={ <GameView data = {this.state.userData} updateCurrentPage={this.updateCurrentPage} updateNavbar={this.updateNavbar} />} />
            <Route path="configuracion" element={ <ConfigurationView data = {this.state.userData} updateCurrentPage={this.updateCurrentPage}/>} />
            <Route path="soporte" element={ <ContactView updateCurrentPage={this.updateCurrentPage}/>} />
            <Route path="estadisticas" element={ this.state.userData.admin ? <StatisticsView data = {this.state.statisticsData} updateCurrentPage={this.updateCurrentPage}/> :< NotAdmin updateCurrentPage={this.updateCurrentPage}/>} />
            <Route path="leaderboard" element={ <LeaderboardView data = {this.state.leaderboardData} user = {this.state.userData} updateCurrentPage={this.updateCurrentPage}/>} />
            <Route path="*" element={<PageNotFound updateCurrentPage={this.updateCurrentPage}/> } />
          </Routes>
        </div>
      );
    }
}

export default App;
