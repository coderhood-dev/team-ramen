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
import { UserContext } from "./context/user";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [movie, setMovie] = React.useState(undefined);
  const location = useLocation();
  return (
    <PopularMoviesContext.Provider value={{ movie, setMovie }}>
      <UserContext.Provider value={{ user, setUser }}>
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
      </UserContext.Provider>
    </PopularMoviesContext.Provider>
  );
}

export default App;
