import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Counter, ControlledInput } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Navigation />} />
          <Route path="/counter" exact component={() => <Counter />} />
          <Route path="/controlledinput" exact component={() =><ControlledInput />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
