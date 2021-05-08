import React from 'react';
import Navbar from './components/Navbar';
import './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>    
    <Navbar/>
    <Switch>
      <route path='/' exact />
    </Switch>
    </Router>  
  );
}

export default App;
