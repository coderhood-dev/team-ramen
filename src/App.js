import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PopularMoviesContext } from "./context";
import { Flex } from "@chakra-ui/react";
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
  Login,
  Register,
  Profile,
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
            <Flex direction="column" h="100vh" fontSize="1rem">
              <Header />
              <About />
              <FooterAbout />
            </Flex>
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
          <Route exact path="/profile">
            <Header />
            <Profile />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </PopularMoviesContext.Provider>
  );
}

export default App;
