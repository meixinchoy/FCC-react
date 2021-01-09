import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Counter, ControlledInput, ControlledForms, EventListener } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Navigation />} />
          <Route path="/counter" exact component={() => <Counter />} />
          <Route path="/controlledinput" exact component={() => <ControlledInput />} />
          <Route path="/controlledforms" exact component={() => <ControlledForms />} />
          <Route path="/eventlistener" exact component={() => <EventListener />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
