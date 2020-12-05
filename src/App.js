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

function App() {
  return (
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
  );
}

export default App;
