import React from 'react';
import './App.css';
import Home from './containers/Home';
import Login from './containers/Login';
import Card from './components/UI/Card';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Post from './containers/Post';

function App() {
  return (

    <Router>
      <div className="App">
        <Card>
            <div style={{ padding: '50px 0'  }}>
              <Logo />
            </div>
            <Navbar />
        </Card>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/contact-us" />
        <Route path="/post/:id" component={Post} /> 
      </div>
    </Router>
    
  );
}

export default App;
