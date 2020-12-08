import { Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
  Profile,
} from "./components/index";
import { ActualUser } from "./context";
import { useState } from "react";

function App() {
  const [actualUser, setActualUser] = useState(undefined);

  return (
    <ActualUser.Provider value={(actualUser, setActualUser)}>
      <Router>
        <Switch>
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
    </ActualUser.Provider>
  );
}

export default App;
