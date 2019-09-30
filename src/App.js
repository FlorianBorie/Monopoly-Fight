import React from 'react';
import './App.css'
import { BrowserRouter, Route } from "react-router-dom";

import Home from './components/Home'
import Login from './components/Login.js'
import Register from './components/Register.js'
import ContainerComponent from './components/ContainerComponent.js'
import Sidenav from './components/Sidenav.js'
import Assemble from './components/Assemble.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContainerComponent>
          <BrowserRouter>
              <Route exact path="/" component={Home}></Route>
              <Route path="/Login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/game" component={Assemble}/>
              <Route exact path="/home" component={Home} />
          </BrowserRouter>
        </ContainerComponent>
      </header>
      
    </div>
  );
}

export default App;