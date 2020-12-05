import { Flex } from "@chakra-ui/react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  Header,
  Body,
  About,
  FooterAbout,
  FooterBody,
  DetailsMovies,
  FooterDetailsMovies,
  Login,
  Register,
} from "./components/index";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path="/">
          <Header />
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
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;
