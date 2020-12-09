import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { PopularMoviesContext } from "./context";
import { Flex } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import {
  Header,
  About,
  FooterAbout,
  Login,
  Register,
  Profile,
  Genre,
  Home,
  DetailMovie,
} from "./components/index";

function App() {
  const [movie, setMovie] = React.useState(undefined);
  const location = useLocation();
  return (
    <PopularMoviesContext.Provider value={{ movie, setMovie }}>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <Flex direction="column" h="100vh" fontSize="1rem">
              <Header />
              <About />
              <FooterAbout />
            </Flex>
          </Route>
          <Route exact path="/details/:id">
            <DetailMovie />
          </Route>
          <Route exact path="/genre/:id">
            <Genre />
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
      </AnimatePresence>
    </PopularMoviesContext.Provider>
  );
}

export default App;
