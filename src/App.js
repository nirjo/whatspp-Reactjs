
import React from 'react';
import './App.css';
// import { Button } from '@material-ui/core';
import Sidebar from './Sidebar';
import Chat from "./chat";


function App() {
  return (
    <div  className="App">
        <h1>whatapp chat </h1>
         <div className="body_app">
         <Sidebar />
         <Chat />

         </div>
      
    </div>
  );
}

export default App;
