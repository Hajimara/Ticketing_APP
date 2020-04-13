import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import LoginPage from "./page/LoginPage";
import MainPage from "./page/MainPage";
import RegisterPage from "./page/RegisterPage";
import Footer from "./components/common/Footer";
import MoviePage from "./page/MoviePage";
import TicketPage from "./page/TicketPage";
import MyHomePage from "./page/MyHomePage";
import EventPage from "./page/EventPage";
import MovieDetailPage from "./page/MovieDetailPage";
import Seatpage from "./page/SeatPage";
import AdminPage from "./page/AdminPage";

function App() {
  return (
    <>
      <Helmet>
        <title>TICKET - HEAJIMARAGO</title>
      </Helmet>
      <Route component={MainPage} path="/" exact></Route>
      <Route component={LoginPage} path="/login"></Route>
      <Route component={RegisterPage} path="/register"></Route>
      <Route component={MoviePage} path="/movie" exact></Route>
      <Route component={MovieDetailPage} path='/movie/:id'></Route>
      <Route component={TicketPage} path="/Ticket"></Route>
      <Route component={MyHomePage} path="/myHome"></Route>
      <Route component={EventPage} path="/event"></Route>
      <Route component={Seatpage} path="/seat"></Route>
      <Route component={AdminPage} path="/admin"></Route>
      <div style={{clear:'both' }}></div>
      <Footer/>
    </>
  );
}

export default App;
