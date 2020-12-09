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
  Profile,
} from "./components/index";
import { UserContext } from "./context/user";
import { useState } from "react";

import { useAuth } from "./hooks/useAuth";

function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const { addpurchasedfilm } = useAuth();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Header />
            <Body />
            <button
              style={{ marginTop: "5rem" }}
              onClick={(e) => {
                e.preventDefault();
                console.log("user", user);
                addpurchasedfilm(user, { tile: "cap", price: 400 })
                  .then((u) => {
                    console.log(u);
                  })
                  .catch((e) => {
                    console.log(e);
                    //setLoading(false);
                  });
              }}>
              user
            </button>
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
      </AnimatePresence>
    </UserContext.Provider>
  );
}

export default App;
