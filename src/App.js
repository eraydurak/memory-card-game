import "./App.scss";
import LandingPage from "./LandingPage/LandingPage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Game from "./Game/Game";

function App() {
  return (
    <Router>
      <Switch>
        <Route  path="/game" component={Game} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
