import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Home,
  Contact,
  Login,
  Register,
  About,
  ForgetPassword,
  ForgetPasswordRequest
} from "./pages/index";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/contact" component={Contact} />

        <Route path="/about" component={About} />

        <Route path="/login" component={Login} />

        <Route path="/register" component={Register} />
        <Route path="/forget_password" component={ForgetPassword} />
        <Route
          path="/forget_password_request"
          component={ForgetPasswordRequest}
        />
        <Route exec path="/" component={Home} />

        {/* <Route component={FourOFour} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
