import Participants from './Participants';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/participants">
          <Participants/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
