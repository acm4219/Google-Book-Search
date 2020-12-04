import React from "react";
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Saved from "./views/Saved"
import Search from "./views/Search"

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
     <Router>
       
       <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/saved">
            <Saved />
          </Route>
        </Switch>
        </div>
      
      </Router>

     
    </div>
  );
}

export default App;
