import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PopularMoviesContext } from "./context";
import {
  Header,
  Body,
  About,
  FooterAbout,
  FooterBody,
  DetailsMovies,
  FooterDetailsMovies,
  NavBar,
  GridMovies,
} from "./components/index";

function App() {
  const [movie, setMovie] = React.useState(undefined);
  return (
    <PopularMoviesContext.Provider value={{ movie, setMovie }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <NavBar />
            <Body />
            <FooterBody />
          </Route>
          <Route exact path="/about">
            <Header />
            <About />
            <FooterAbout />
          </Route>
          <Route exact path="/details/:id">
            <Header />
            <DetailsMovies />
            <FooterDetailsMovies />
          </Route>
          <Route exact path="/genre/:id">
            <Header />
            <NavBar />
            <GridMovies />
          </Route>
        </Switch>
      </Router>
    </PopularMoviesContext.Provider>
  );
}

export default App;
