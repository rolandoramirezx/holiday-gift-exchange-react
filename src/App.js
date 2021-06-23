import Participants from './Participants';
import Home from './Home';
import MyWishList from './MyWishList';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import PlantDetailsPage from './PlantDetailsPage';

import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
  import "./App.css";

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
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/plant-details">
          <PlantDetailsPage/>
        </Route>
        <PrivateRoute component={MyWishList} path="/my-wish-list"/>
      </Switch>
    </Router>
  );
}

export default App;
