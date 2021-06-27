import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

// Public Route imports
import Login from "../components/Login";
import Signup from "../components/Signup";
import Search from "../components/Search";
import JobSearch from "../components/JobSearch";


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
<<<<<<< HEAD
        <Route path='/search' component={Search} />
      
=======
        <PrivateRoute path='/add-job' component={Search} />
        <PrivateRoute path='/' component={JobSearch} exact/>
        
>>>>>>> d20de2be77e3b379de9559df94b3425f1edfd536
      </Switch>
    </Router>
  );
};

export default AppRoutes;
