import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Owners from "./components/Owners/Owners";
// import Builders from "./components/Builders/Builders";
import BuilderContainer from './containers/builderContainer';
import MaintenanceDetails from "./components/MaintenanceDetails/MaintenanceDetails";
import MainContent from "./components/Layout/MainContent/MainContent";
import Sites from "./components/Sites/Sites";
import SiteUnits from "./components/SiteUnits/SiteUnits";
import Society from "./components/Society/Society";
import Budget from "./components/Budget/Budget";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <MainContent>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/builders">
            <BuilderContainer />
          </Route>
          <Route exact path="/builder/details/:id">
            <BuilderContainer />
          </Route>
          <Route exact path="/builder/new">
            <BuilderContainer />
          </Route>

          <Route exact path="/sites">
            <Sites />
          </Route>
          <Route exact path="/site/details/:id">
            <Sites />
          </Route>
          <Route exact path="/site/new">
            <Sites />
          </Route>

          <Route exact path="/siteunits">
            <SiteUnits />
          </Route>
          <Route exact path="/siteunit/details/:id">
            <SiteUnits />
          </Route>
          <Route exact path="/siteunit/new">
            <SiteUnits />
          </Route>

          <Route exact path="/society">
            <Society />
          </Route>
          <Route exact path="/society/details/:id">
            <Society />
          </Route>
          <Route exact path="/society/new">
            <Society />
          </Route>

          <Route exact path="/owners">
            <Owners />
          </Route>
          <Route exact path="/owner/details/:id">
            <Owners />
          </Route>
          <Route exact path="/owner/new">
            <Owners />
          </Route>

          <Route exact path="/budget">
            <Budget />
          </Route>

          <Route exact path="/maintenance">
            <MaintenanceDetails />
          </Route>

        </MainContent>
      </Switch>
    </Router>
  );
}

export default App;
