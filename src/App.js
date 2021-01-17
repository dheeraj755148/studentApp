import "./App.css";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Landing} />
        {/*     <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} /> */}
      </Switch>
    </Router>
  );
}

export default App;
