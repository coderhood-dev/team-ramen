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
          <Flex
            flexDir={{
              base: "column",
            }}
            h={{
              base: "100vh",
            }}
            fontSize={{ base: "16px" }}
          >
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
      </Switch>
    </Router>
  );
}

export default App;
