//import Login from "./Components/Login";
import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Test from "./Components/Test";

class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Switch>
          <Route path= {"/"} exact>
            <h1>This Is Homepage</h1>
          </Route>
          <Route path= {"/login"} exact>
            <h1>This is Login page</h1>
          </Route>
          <Route path= {"/signup"} exact>
            <h1>This is SignUp page</h1>
          </Route>
          <Route path= {"/about-us"} exact>
            <h1>This is About us page</h1>
          </Route>
          <Test/>
          <Route path= {"/contact-us"} exact>
            <h1>This is Contact us page</h1>
          </Route>
          <Route path = {"/**"}>
            <Redirect to = {"/"}/>
          </Route>
          </Switch>
        </div>
      </Router>
    );
  };
};
export default App;
