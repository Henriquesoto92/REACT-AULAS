import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Empresa from "./pages/Empresa"
import Contato from "./pages/Contato"
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/empresa">
            <Empresa />
          </Route>
          <Route path="/contato">
            <Contato />
          </Route>
        </Switch>
        <Footer />
      </div >
    </Router>
  );
}

export default App
