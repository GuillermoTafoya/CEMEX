import React, { Component } from 'react';
import './App.css';
import './components/Login.scss';
import LoginComponent from './components/Login';


function App() {
  return (
    <div className="app">
        <LoginComponent
            mode={'login'}
            onSubmit={
                function() {
                    console.log('submit');
                }
            }
        />
    </div>
  );
}

export default App;
