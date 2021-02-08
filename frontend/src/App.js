import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthenticationAndLogin from "./Components/admin/Login/login";
import Dashboard from './Components/admin/dashboard/dashboard';
import PublicRoutes from "./Components/public";
import PrivateRoute from "./Components/admin/privateRoute/privateRoute";

function App() {
  return (
    <BrowserRouter>
     <Switch>
       <Route exact path="/">
         <PublicRoutes />
         </Route>
         <Route exact path="/admin/login" component={AuthenticationAndLogin}/>
          <PrivateRoute exact path="/admin/dashboard" component={Dashboard}/>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
