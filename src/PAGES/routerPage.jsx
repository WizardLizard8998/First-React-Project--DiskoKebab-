import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ButtonAppBar from "../COMPONENTS/appBar";
import MainPage from "./mainPage";
import MenuPage from "./menuPage";
import ContactUs from "./contactUs";
import LoginPage from "./loginPage";
import SingUp from "./newSignupPage";

import DenemeSayfasi from "./denemesayfası";
import CartPage from "./cartPage";


export default function RouterPage() {
  return (
    <Router>
      <div>
        <ButtonAppBar />
        <Switch>
          <Route exact path="/NewSignup">
            <SingUp />
          </Route>
          <Route exact path="/LoginPage">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/Menu">
            <MenuPage />
          </Route>
          <Route exact path="/BizeUlasin">
            <ContactUs />
          </Route>
          <Route exact path="/denemesayfasi">
            <DenemeSayfasi />
          </Route>
          <Route exact path="/Sepet">
            <CartPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

