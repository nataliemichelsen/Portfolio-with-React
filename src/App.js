import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Nav from './components/nav/nav';
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio/portfolio";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav/> */}
        <Switch>
          <Route exact path= '/' component= {About}/> 
          <Route exact path= '/contact' component= {Contact}/> 
          <Route exact path= '/portfolio' component= {Portfolio}/> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;