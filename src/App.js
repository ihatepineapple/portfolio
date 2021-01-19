import React from 'react';
import './stylesheets/styles.css';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        
       
      </Switch>
     
    </div>
  );
}

export default App;
