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
import { useUserModifier } from "./hooks/useUserModifier";

function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const { addpurchasedfilm } = useUserModifier();

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
                //simulacion de agregar una pelicula a un usuario
                e.preventDefault();
                console.log(user);
                //addpurchasedfilm agrega la pelicula al usuario en el localStorage y devuelve el usuario actualizado,
                addpurchasedfilm(user, { title: "sherk", price: "400" })
                  .then((newUser) => {
                    //como devuelve el usuario actualizado, podria setearse el nuevo usuario en contexto o hacer x cosas
                    console.log(user);
                    console.log(newUser);
                  })
                  .catch((e) => console.log(e));
              }}
            >
              user and add film
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
