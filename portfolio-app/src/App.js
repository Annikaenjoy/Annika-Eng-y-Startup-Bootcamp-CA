import "./sass/styles.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Frontpage from "./View/Frontpage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Frontpage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
