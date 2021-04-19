import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../Trips/HomePage";
import CreateTripPage from "../Trips/CreateTripPage";
import ListTripsPage from "../Trips/ListTripsPage";
import LoginPage from "../Trips/LoginPage";
import TripDetailsPage from "../Trips/TripDetailsPage";
import ApplyToTripPage from "../Trips/ApplyToTripPage";
import AdminHomePage from "../Trips/AdminHomePage";
import CandidatesPage from "../Trips/CandidatesPage";
import AppBar from "../Trips/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <AppBar />
          <HomePage />
        </Route>
        <Route exact path="/application-form/:id">
          <AppBar />
          <ApplyToTripPage />
        </Route>
        <Route exact path="/login">
          <AppBar />
          <LoginPage />
        </Route>
        <Route exact path="/trips/create">
          <AppBar />
          <CreateTripPage />
        </Route>
        <Route exact path="/trips/list">
          <AppBar />
          <ListTripsPage />
        </Route>
        <Route exact path="/trips/details/:id">
          <AppBar />
          <TripDetailsPage />
        </Route>
        <Route exact path="/admin">
          <AppBar />
          <AdminHomePage />
        </Route>
        <Route exact path="/candidates">
          <AppBar />
          <CandidatesPage />
        </Route>

        <Route path="*">
          <h1>Página não encontrada (404)</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;