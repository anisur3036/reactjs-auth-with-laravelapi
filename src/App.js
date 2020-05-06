import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
function App() {
  return (
    <Router>
      <div className="bg-gray-300 h-screen">
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  );
}

export default App;
