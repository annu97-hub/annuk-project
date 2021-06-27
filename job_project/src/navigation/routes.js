import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

// Public Route imports
import Login from "../components/Login";
import Signup from "../components/Signup";
import Search from "../components/Search";

// Private Routes imports
//import Home from "../pages/Home";


const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        {/* Private Routes */}
        {/* <PrivateRoute exact path='/' component={Home} /> */}
        
        {/* Public Routes */}
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/search' component={Search} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
