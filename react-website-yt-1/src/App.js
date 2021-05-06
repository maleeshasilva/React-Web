import React from 'react';
import Navbar from './components/Navbar';
import './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
