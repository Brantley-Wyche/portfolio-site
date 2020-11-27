import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Work from './contents/Work';

function App() {
  return (
    
      <div className="App">
        

        <Router>
        <Navigation />
        <Route exact path="/">
          <Home />
        </Route>

        {/*Route for About*/}
        <Route path="/about">
          <About />
        </Route>

        {/*Route for Education*/}
        <Route path="/education">
          <Education />
        </Route>

        {/*Route for Skills*/}
        <Route path="/skills">
          <Skills />
        </Route>

        {/*Route for Contact*/}
        <Route path="/contact">
          <Contact />
        </Route>

        {/*Route for My Work*/}
        <Route path="/work">
          <Work />
        </Route>
        </Router>
      </div>
    
    


  );
}

export default App;
